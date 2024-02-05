import * as net from "net";

function formatDateTime(date: Date): string {
  const year = date.getFullYear();
  const month = zeroPad(date.getMonth() + 1); // Months are zero-based
  const day = zeroPad(date.getDate());
  const hours = zeroPad(date.getHours());
  const minutes = zeroPad(date.getMinutes());

  return `${year}-${month}-${day} ${hours}:${minutes}`;
}

function zeroPad(num: number): string {
  return num < 10 ? `0${num}` : num.toString();
}

const server = net.createServer((socket) => {
  const now = new Date();
  const formattedDateTime = formatDateTime(now) + "\n";

  socket.write(formattedDateTime);
  socket.end();
});

const port = Number(process.argv[2]) || 8000;
server.listen(port);

console.log(`Time server listening on port ${port}`);
