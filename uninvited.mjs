#!/usr/bin/env node
import http from 'http';
import fs from 'fs/promises';
import path from 'path';

// Port and authorized users setup
const port = 5000;
const authorizedUsers = {
    'Caleb_Squires': 'abracadabra',
    'Tyrique_Dalton': 'abracadabra',
    'Rahima_Young': 'abracadabra',
};

// Utility function to parse basic authentication header
const parseBasicAuth = (authHeader) => {
    if (!authHeader || !authHeader.startsWith('Basic ')) return null;
    const base64Credentials = authHeader.split(' ')[1]; // "Basic <base64encoded>"
    const credentials = Buffer.from(base64Credentials, 'base64').toString('utf8');
    const [username, password] = credentials.split(':');
    return { username, password };
};

// Function to validate the credentials
const isAuthenticated = (credentials) => {
    if (!credentials || !credentials.username || !credentials.password) return false;
    const validPassword = authorizedUsers[credentials.username];
    return validPassword && validPassword === credentials.password;
};

const server = http.createServer(async (req, res) => {
    // Step 1: Authenticate before anything else
    const authHeader = req.headers['authorization'];
    const credentials = parseBasicAuth(authHeader);

    if (!isAuthenticated(credentials)) {
        // If authentication fails, immediately respond with 401 and stop further processing
        res.writeHead(401, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ error: 'Authorization Required' }));
        return;
    }

    // Step 2: Proceed with other operations only if authenticated
    if (req.method === 'POST') {
        const guestName = path.basename(req.url);
        if (!guestName || guestName === '/') {
            res.writeHead(400, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({ error: 'guest name is required' }));
            return;
        }

        try {
            // Collect the request body
            const buffers = [];
            for await (const chunk of req) {
                buffers.push(chunk);
            }
            const body = Buffer.concat(buffers).toString();

            // Create or overwrite guest file
            await fs.mkdir('./guests', { recursive: true });
            const guestFilePath = path.join('./guests', `${guestName}.json`);
            await fs.writeFile(guestFilePath, body);

            // Respond with 200 and echo back the content
            res.writeHead(200, { 'Content-Type': 'application/json' });
            res.end(body);
        } catch (writeError) {
            // Handle server error during file operations
            res.writeHead(500, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({ error: 'server failed' }));
        }
    } else {
        // Handle other HTTP methods with 405 error
        res.writeHead(405, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ error: 'method not allowed' }));
    }
});

// Start the server
server.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});
