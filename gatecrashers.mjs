#!/usr/bin/env node
import http from 'http';
import fs from 'fs/promises';
import path from 'path';

const port = 5000;

const validUsers = {
    'Caleb_Squires': 'abracadabra',
    'Tyrique_Dalton': 'abracadabra',
    'Rahima_Young': 'abracadabra'
};

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

const server = http.createServer(async (req, res) => {
    try {
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
                // Parse the JSON to validate it and ensure it's properly formatted
                const guestData = JSON.parse(body);
                await fs.mkdir('./guests', { recursive: true });
                const guestFilePath = path.join('./guests', `${guestName}.json`);
                
                // Write the formatted JSON to file
                const formattedJson = JSON.stringify(guestData, null, 2);
                await fs.writeFile(guestFilePath, formattedJson);
                
                // Send response with compact JSON (no formatting)
                res.writeHead(200, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify(guestData));
            } catch (err) {
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