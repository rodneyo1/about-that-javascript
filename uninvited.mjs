#!/usr/bin/env node

import http from 'http';
import fs from 'fs/promises';
import path from 'path';

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
          // Check if body is valid JSON
          if (!isValidJson(body)) {
            res.writeHead(400, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({ error: 'invalid JSON' }));
            return;
          }

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

// Function to validate JSON
const isValidJson = (str) => {
  try {
    JSON.parse(str);
    return true;
  } catch (e) {
    return false;
  }
};

// Start server
server.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
