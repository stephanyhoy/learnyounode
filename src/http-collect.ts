import * as http from "http";

if (process.argv.length !== 3) {
  console.error("Usage: node http-collect.js <URL>");
  process.exit(1);
}

const url: string = process.argv[2];

http
  .get(url, (response) => {
    // Variable para almacenar los datos recibidos
    let dataBuffer: Buffer[] = [];

    // Se registra el evento 'data' para cada fragmento de datos recibido
    response.on("data", (data: Buffer) => {
      dataBuffer.push(data);
    });

    // Se registra el evento 'end' para manejar el final de la transmisión
    response.on("end", () => {
      // Se concatenan los fragmentos de datos en un solo Buffer
      const resultBuffer = Buffer.concat(dataBuffer);

      // Se convierte el Buffer a una cadena de texto
      const resultString = resultBuffer.toString();

      // Se imprime el número de caracteres recibidos
      console.log(resultBuffer.length);

      // Se imprime la cadena completa de caracteres
      console.log(resultString);
    });

    // Manejo de errores
    response.on("error", (error) => {
      console.error(`Error: ${error.message}`);
    });
  })
  .on("error", (error) => {
    console.error(`Error: ${error.message}`);
  });
