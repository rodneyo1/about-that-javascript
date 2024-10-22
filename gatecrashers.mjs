#!/usr/bin/env node
import http from 'http';
import fs from 'fs/promises';
import path from 'path';

const port = 5000;

// Get the guest directory path from command line arguments or environment
const guestDir = process.argv[2] || './guests';

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

const createServer = (customGuestDir) => {
    const targetDir = customGuestDir || guestDir;
    
    return http.createServer(async (req, res) => {
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
                    // Parse the JSON to validate it
                    const guestData = JSON.parse(body);
                    
                    // Create directory if it doesn't exist
                    await fs.mkdir(targetDir, { recursive: true });
                    const guestFilePath = path.join(targetDir, `${guestName}.json`);
                    
                    // Write the formatted JSON to file
                    await fs.writeFile(guestFilePath, JSON.stringify(guestData, null, 2));
                    
                    // Send response
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
};

if (process.env.NODE_ENV !== 'test') {
    const server = createServer();
    server.listen(port, () => {
        console.log(`Server listening on port ${port}`);
    });
}

export default createServer;