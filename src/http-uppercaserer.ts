import * as http from "http";
import map = require("through2-map");

const server = http.createServer((req, res) => {
  if (req.method !== "POST") {
    return res.end("Only POST requests are accepted\n");
  }

  req.pipe(map((chunk) => chunk.toString().toUpperCase())).pipe(res);
});

const port = Number(process.argv[2]) || 8000;
server.listen(port);

console.log(`HTTP UPPERCASERER listening on port ${port}`);
