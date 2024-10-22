#!/usr/bin/env node

import http from 'http';
import fs from 'fs/promises';
import path from 'path';

const port = 5000;

// Valid users for authentication
const validUsers = {
    'Caleb_Squires': 'abracadabra',
    'Tyrique_Dalton': 'abracadabra',
    'Rahima_Young': 'abracadabra'
};

// Function to authenticate requests
function authenticateRequest(req) {
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith('Basic ')) {
        return false;
    }

    const base64Credentials = authHeader.split(' ')[1];
    const credentials = Buffer.from(base64Credentials, 'base64').toString('utf-8');
    const [username, password] = credentials.split(':');

    return validUsers[username] === password;
}

// Create the server
const server = http.createServer(async (req, res) => {
    try {
        // Authentication check
        if (!authenticateRequest(req)) {
            res.writeHead(401, { 
                'Content-Type': 'application/json',
                'WWW-Authenticate': 'Basic realm="Access to guest list"'
            });
            res.end(JSON.stringify({ error: 'Authorization Required' }));
            return;
        }

        // Handle POST requests
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
                const guestData = JSON.parse(body);
                
                // Ensure the guests directory exists
                const guestDir = path.join(process.cwd(), 'guests');
                await fs.mkdir(guestDir, { recursive: true });
                
                const guestFilePath = path.join(guestDir, `${guestName}.json`);
                
                // Write the formatted JSON to the file
                await fs.writeFile(guestFilePath, JSON.stringify(guestData, null, 2));
                
                // Send response
                res.writeHead(201, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify(guestData));
            } catch (err) {
                console.error(err);
                res.writeHead(500, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify({ error: 'server failed' }));
            }
        } else {
            res.writeHead(405, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({ error: 'method not allowed' }));
        }
    } catch (err) {
        console.error(err);
        res.writeHead(500, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ error: 'server failed' }));
    }
});

// Start the server
if (process.env.NODE_ENV !== 'test') {
    server.listen(port, () => {
        console.log(`Server listening on port ${port}`);
    });
}

export default server;
