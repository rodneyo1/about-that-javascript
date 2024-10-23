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

const parseBasicAuth = (authHeader) => {
    if (!authHeader) return null;
    try {
        const [username, password] = Buffer.from(authHeader, 'base64').toString().split(':');
        return { username, password };
    } catch (error) {
        return null;
    }
};

const server = http.createServer(async (req, res) => {
    try {
        if (req.method === 'POST') {
            const guestName = path.basename(req.url);
            if (!guestName || guestName === '/') {
                res.writeHead(400, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify({ error: 'guest name is required' }));
                return;
            }

            // Check authorization
            const authHeader = req.headers.authorization?.split(' ')[1];
            const credentials = parseBasicAuth(authHeader);
            
            if (!credentials || 
                !authorizedUsers[credentials.username] || 
                authorizedUsers[credentials.username] !== credentials.password) {
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
                // Create or overwrite guest file
                await fs.mkdir('./guests', { recursive: true });
                const guestFilePath = path.join('./guests', `${guestName}.json`);
                await fs.writeFile(guestFilePath, body);
                
                // Respond with 200 and echo back the content
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