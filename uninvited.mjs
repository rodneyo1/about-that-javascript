import http from 'http';
import { writeFile, mkdir } from 'fs/promises';
import { join } from 'path';

const PORT = 5000;
const GUESTS_DIR = 'guests';

const server = http.createServer((req, res) => {
    res.setHeader('Content-Type', 'application/json');

    if (req.method === 'POST') {
        let body = '';

        req.on('data', chunk => {
            body += chunk.toString();
        });

        req.on('end', async () => {
            try {
                const guestName = req.url.slice(1);

                // Validate guest name
                if (!guestName) {
                    res.writeHead(400);
                    res.end(JSON.stringify({ error: 'guest name is required' }));
                    return;
                }

                // Ensure the guests directory exists
                await mkdir(GUESTS_DIR, { recursive: true });

                // Write guest data to file
                const guestFile = join(GUESTS_DIR, `${guestName}.json`);
                await writeFile(guestFile, body);

                // Respond with the stored content and 201 status
                res.writeHead(201);
                res.end(body);
            } catch (err) {
                // Respond with server error if something goes wrong
                res.writeHead(500);
                res.end(JSON.stringify({ error: 'server failed' }));
            }
        });
    } else {
        // Method not allowed for non-POST requests
        res.writeHead(405);
        res.end(JSON.stringify({ error: 'method not allowed' }));
    }
});

server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
