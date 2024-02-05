import * as fs from "fs";
import * as path from "path";

const directoryPath: string = process.argv[2];
const fileExtension: string = `.${process.argv[3]}`;

fs.readdir(
  directoryPath,
  (err: NodeJS.ErrnoException | null, files: string[]) => {
    if (err) {
      console.error(err);
      return;
    }

    const filteredFiles = files.filter(
      (file) => path.extname(file) === fileExtension
    );

    filteredFiles.forEach((file) => {
      console.log(file);
    });
  }
);
