import * as http from "http";
import * as url from "url";

const server = http.createServer((req, res) => {
  // Parse the request URL
  const parsedUrl = url.parse(req.url!, true);
  const pathName = parsedUrl.pathname!;
  const isoTime = parsedUrl.query.iso as string;

  // Set Content-Type to JSON
  res.writeHead(200, { "Content-Type": "application/json" });

  // Handle different endpoints
  if (pathName === "/api/parsetime") {
    const date = new Date(isoTime);
    const jsonResponse = {
      hour: date.getHours(),
      minute: date.getMinutes(),
      second: date.getSeconds(),
    };
    res.end(JSON.stringify(jsonResponse));
  } else if (pathName === "/api/unixtime") {
    const date = new Date(isoTime);
    const jsonResponse = {
      unixtime: date.getTime(),
    };
    res.end(JSON.stringify(jsonResponse));
  } else {
    // Handle invalid endpoints
    res.writeHead(404);
    res.end();
  }
});

// Get the port number from the command line argument
const port = process.argv[2];

// Start the server
server.listen(port);

console.log(`Server running at http://127.0.0.1:${port}/`);
