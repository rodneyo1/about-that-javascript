#!/usr/bin/env node
import http from 'http';
import fs from 'fs/promises';
import path from 'path';

const port = 5000;

// Authentication credentials
const validUsers = {
    'Caleb_Squires': 'abracadabra',
    'Tyrique_Dalton': 'abracadabra',
    'Rahima_Young': 'abracadabra'
};

// Function to check authentication
function authenticateRequest(req) {
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith('Basic ')) {
        return false;
    }

    // Extract credentials from Basic Auth header
    const base64Credentials = authHeader.split(' ')[1];
    const credentials = Buffer.from(base64Credentials, 'base64').toString('utf-8');
    const [username, password] = credentials.split(':');

    return validUsers[username] === password;
}

const server = http.createServer(async (req, res) => {
    try {
        // Check authentication first
        if (!authenticateRequest(req)) {
            res.writeHead(401, { 
                'Content-Type': 'application/json',
                'WWW-Authenticate': 'Basic realm="Access to guest list"'
            });
            res.end('Authorization Required');
            return;
        }

        if (req.method === 'POST') {
            const guestName = path.basename(req.url);
            if (!guestName || guestName === '/') {
                res.writeHead(400, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify({ error: 'guest name is required' }));
                return;
            }

            // Collect the request body
            const buffers = [];
            for await (const chunk of req) {
                buffers.push(chunk);
            }
            const body = Buffer.concat(buffers).toString();

            try {
                await fs.mkdir('./guests', { recursive: true });
                const guestFilePath = path.join('./guests', `${guestName}.json`);
                await fs.writeFile(guestFilePath, body);
                
                res.writeHead(200, { 'Content-Type': 'application/json' });
                res.end(body);
            } catch (writeError) {
                res.writeHead(500, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify({ error: 'server failed' }));
            }
        } else {
            res.writeHead(405, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({ error: 'method not allowed' }));
        }
    } catch (err) {
        res.writeHead(500, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ error: 'server failed' }));
    }
});

server.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});