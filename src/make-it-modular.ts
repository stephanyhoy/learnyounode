// make-it-modular.ts

const filterFilesByExtension = require("./mymodule.js");

const directoryPath: string = process.argv[2] || "";
const fileExtension: string = process.argv[3] || "";

filterFilesByExtension(
  directoryPath,
  fileExtension,
  (err: NodeJS.ErrnoException | null, files?: string[]) => {
    if (err) {
      console.error(err.message);
      return;
    }

    if (files) {
      files.forEach((file) => {
        console.log(file);
      });
    }
  }
);
