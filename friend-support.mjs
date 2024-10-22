#!/usr/bin/env node

import http from 'http';
import fs from 'fs/promises';
import path from 'path';

const port = 5000;

// Create the server
const server = http.createServer(async (req, res) => {
  try {
// check reqest
    if (req.method === 'GET') {
      // Extract the guest name from the URL
      const guestName = path.basename(req.url);

      if (!guestName || guestName === '/') {
        res.writeHead(404, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ error: 'guest not found' }));
        return;
      }

      try {
        // Construct the guest file path 
        const guestFilePath = path.join('.', 'guests', `${guestName}.json`)

        // Read guest file 
        const fileContent = await fs.readFile(guestFilePath, 'utf8');

        // Parse and send the guest data as JSON
        const guestData = JSON.parse(fileContent);
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify(guestData));

      } catch (err) {
        // JSON parsing errors
        if (err.code === 'ENOENT') {
          res.writeHead(404, { 'Content-Type': 'application/json' });
          res.end(JSON.stringify({ error: 'guest not found' }));
        } else {
          res.writeHead(500, { 'Content-Type': 'application/json' });
          res.end(JSON.stringify({ error: 'server failed' }));
        }
      }
    } else {
      res.writeHead(404, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ error: 'guest not found' }));
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
