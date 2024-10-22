#!/usr/bin/env node

import fs from 'fs/promises';
import path from 'path';
import http from 'http';

const port = 5000;

// Create the server
const server = http.createServer(async (req, res) => {
  try {
    // Check request method
    if (req.method === 'POST') {
      // Extract the guest name from the URL
      const guestName = path.basename(req.url);

      if (!guestName || guestName === '/') {
        res.writeHead(400, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ error: 'guest name is required' }));
        return;
      }

      let body = '';

      // Collect the request body
      req.on('data', chunk => {
        body += chunk.toString();
      });

      req.on('end', async () => {
        try {
          // Parse the JSON body
          const guestData = JSON.parse(body);

          // Construct the guest file path
          const guestFilePath = path.join('.', 'guests', `${guestName}.json`);

          // Write guest data to the file
          await fs.writeFile(guestFilePath, JSON.stringify(guestData, null, 2), 'utf8');

          // Send response
          res.writeHead(201, { 'Content-Type': 'application/json' });
          res.end(JSON.stringify(guestData));
        } catch (err) {
          // Handle JSON parsing errors
          res.writeHead(500, { 'Content-Type': 'application/json' });
          res.end(JSON.stringify({ error: 'server failed' }));
        }
      });

    } else {
      res.writeHead(405, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ error: 'method not allowed' }));
    }
  } catch (err) {
    res.writeHead(500, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ error: 'server failed' }));
  }
});

// Start server
server.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
