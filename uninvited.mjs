#!/usr/bin/env node
import http from 'http';
import fs from 'fs/promises';
import path from 'path';

const port = 5000;
const authorizedUsers = {
    'Caleb_Squires': 'abracadabra',
    'Tyrique_Dalton': 'abracadabra',
    'Rahima_Young': 'abracadabra',
};

// Centralized error handling
const handleError = (res, type = 'auth') => {
    switch (type) {
        case 'auth':
            res.writeHead(401, { 'Content-Type': 'application/json' });
            res.end('Authorization Required');
            break;
        case 'method':
            res.writeHead(405, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({ error: 'method not allowed' }));
            break;
        case 'server':
            res.writeHead(500, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({ error: 'server failed' }));
            break;
        case 'badRequest':
            res.writeHead(400, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({ error: 'guest name is required' }));
            break;
        default:
            res.writeHead(401, { 'Content-Type': 'application/json' });
            res.end('Authorization Required');
    }
};

const isAuthorized = (authHeader) => {
    try {
        if (!authHeader) return false;
        const [username, password] = Buffer.from(authHeader, 'base64').toString().split(':');
        return authorizedUsers[username] === password;
    } catch {
        return false;
    }
};

const server = http.createServer(async (req, res) => {
    try {
        // Only handle POST requests
        if (req.method !== 'POST') {
            return handleError(res, 'method');
        }

        const guestName = path.basename(req.url);
        if (!guestName || guestName === '/') {
            return handleError(res, 'badRequest');
        }

        // Authentication check
        const authHeader = req.headers.authorization?.split(' ')[1];
        if (!isAuthorized(authHeader)) {
            return handleError(res, 'auth');
        }

        // Collect request body
        const buffers = [];
        for await (const chunk of req) {
            buffers.push(chunk);
        }
        const body = Buffer.concat(buffers).toString();

        // Create or overwrite guest file
        await fs.mkdir('./guests', { recursive: true });
        const guestFilePath = path.join('./guests', `${guestName}.json`);
        await fs.writeFile(guestFilePath, body);
        
        // Success response
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(body);

    } catch (err) {
        handleError(res, 'auth');
    }
});

server.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});