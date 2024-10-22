#!/usr/bin/env node
import http from 'http';
import fs from 'fs/promises';
import path from 'path';

const port = 5000;

const server = http.createServer(async (req, res) => {
    try {
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
                // Try to parse JSON
                const guestData = JSON.parse(body);
                
                // Ensure guests directory exists
                await fs.mkdir('./guests', { recursive: true });
                
                // Write guest data to file
                const guestFilePath = path.join('./guests', `${guestName}.json`);
                await fs.writeFile(guestFilePath, JSON.stringify(guestData, null, 2));
                
                res.writeHead(201, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify(guestData));
            } catch (parseError) {
                // If JSON parsing fails, return 400
                res.writeHead(400, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify({ error: 'invalid JSON' }));
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