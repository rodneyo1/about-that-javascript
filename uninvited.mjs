import fs from "fs/promises";
import http from "http";
import path from "path";

const PORT = 5000;

const server = http.createServer(async (req, res) => {
  res.setHeader("Content-Type", "application/json");

  if (req.method === "POST") {
    try {
      const guestName = path.basename(
        new URL(req.url, `http://${req.headers.host}`).pathname
      );

      if (!guestName) {
        throw new Error("URLmissing in the guest name.");
      }

      let body = "";
      for await (const chunk of req) {
        body += chunk.toString();
      }

      const fileName = `${guestName}.json`;
      const filePath = path.join(process.cwd(), "guests", fileName);

      await fs.mkdir(path.dirname(filePath), { recursive: true });
      await fs.writeFile(filePath, body);

      res.statusCode = 201;
      res.end(body);
    } catch (error) {
      console.error("internal server error:", error);
      res.statusCode = 500;
      res.end(JSON.stringify({ error: "internal server error" }));
    }
  } else {
    res.statusCode = 405;
    res.end(JSON.stringify({ error: "method not allowed" }));
  }
});

server.listen(PORT, () => {
    console.log(`listening on port ${PORT}`);
})
export { server };