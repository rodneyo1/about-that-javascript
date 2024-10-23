#!/usr/bin/env node
import http from 'http';
import fs from 'fs/promises';
import path from 'path';

const port = 5000;
const authorizedUsers = {
    'Caleb_Squires': 'abracadabra',
    'Tyrique_Dalton': 'abracadabra',
    'Rahima_Young': 'abracadabra'
};

const isAuthorized = (req) => {
    try {
        // If no authorization header, fail
        if (!req.headers.authorization) return false;

        // Get the base64 credentials
        const base64Credentials = req.headers.authorization.split(' ')[1];
        if (!base64Credentials) return false;

        // Decode and split credentials
        const credentials = Buffer.from(base64Credentials, 'base64').toString();
        const [username, password] = credentials.split(':');

        // Check if user exists and password matches
        return authorizedUsers[username] === password;
    } catch {
        return false;
    }
};

const server = http.createServer(async (req, res) => {
    // First check: Only allow POST method
    if (req.method !== 'POST') {
        res.writeHead(405, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ error: 'method not allowed' }));
        return;
    }

    // Second check: Require valid authorization
    if (!isAuthorized(req)) {
        res.writeHead(401, { 'Content-Type': 'application/json' });
        res.end('Authorization Required');
        return;
    }

    try {
        const guestName = path.basename(req.url);
        if (!guestName || guestName === '/') {
            res.writeHead(400, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({ error: 'guest name is required' }));
            return;
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
        
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(body);
    } catch (err) {
        res.writeHead(401, { 'Content-Type': 'application/json' });
        res.end('Authorization Required');
    }
});

server.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});