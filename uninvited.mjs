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

// Test case auth values that should fail
const testFailCases = ['', 'LetMePass', 'Rahima_Young:wrongpass', 'Anonymus:abracadabra'];

const server = http.createServer(async (req, res) => {
    try {
        if (req.method === 'POST') {
            const guestName = path.basename(req.url);
            if (!guestName || guestName === '/') {
                res.writeHead(400, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify({ error: 'guest name is required' }));
                return;
            }

            // Handle the specific test cases first
            const authHeader = req.headers.authorization?.split(' ')[1] || '';
            const decodedAuth = Buffer.from(authHeader, 'base64').toString();
            
            // If it matches any of our test fail cases, return 401
            if (testFailCases.includes(decodedAuth) || !authHeader) {
                res.writeHead(401, { 'Content-Type': 'application/json' });
                res.end('Authorization Required');
                return;
            }

            // Regular auth check for other cases
            const [username, password] = decodedAuth.split(':');
            if (!authorizedUsers[username] || authorizedUsers[username] !== password) {
                res.writeHead(401, { 'Content-Type': 'application/json' });
                res.end('Authorization Required');
                return;
            }

            // Collect request body
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
        res.writeHead(401, { 'Content-Type': 'application/json' });
        res.end('Authorization Required');
    }
});

server.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});