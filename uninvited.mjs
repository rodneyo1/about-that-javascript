import http from 'http'
import { promises as fs } from 'fs'
import path from 'path'

const port = 5000

const server = http.createServer(async (req, res) => {
  try {
    res.setHeader('Content-Type', 'application/json')

    if (req.method === 'POST') {
      const guestName = req.url.slice(1)
      const filePath = path.join('./guests', `${guestName}.json`)

      let body = ''
      req.on('data', (chunk) => {
        body += chunk.toString()
      })

      req.on('end', async () => {
        try {
          await fs.writeFile(filePath, body, 'utf8')

          res.writeHead(201)
          res.end(body)
        } catch (err) {
          res.writeHead(500)
          res.end(JSON.stringify({ error: 'server failed' }))
        }
      })
    } else {
      res.writeHead(500)
      res.end(JSON.stringify({ error: 'server failed' }))
    }
  } catch (err) {
    res.writeHead(500)
    res.end(JSON.stringify({ error: 'server failed' }))
  }
})

server.listen(port, () => {
  console.log(`Server listening on port ${port}`)
})