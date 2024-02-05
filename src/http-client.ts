import * as http from "http";

if (process.argv.length !== 3) {
  console.error("Usage: node http-client.js <URL>");
  process.exit(1);
}

const url = process.argv[2];

http
  .get(url, (response) => {
    response.setEncoding("utf8");

    response.on("data", (data) => {
      console.log(data);
    });

    response.on("error", (error) => {
      console.error(`Error: ${error.message}`);
    });
  })
  .on("error", (error) => {
    console.error(`Error: ${error.message}`);
  });
