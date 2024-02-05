import * as http from "http";
import * as fs from "fs";

const server = http.createServer((req, res) => {
  // Obtén la ruta del archivo desde el segundo argumento de la línea de comandos
  const filePath = process.argv[3];

  // Crea un stream de lectura para el archivo
  const fileStream = fs.createReadStream(filePath);

  // Pasa el contenido del stream de lectura al stream de respuesta (res)
  fileStream.pipe(res);
});

const port = Number(process.argv[2]) || 8000;
server.listen(port);

console.log(`HTTP file server listening on port ${port}`);
