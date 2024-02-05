// mymodule.ts

import * as fs from "fs";
import * as path from "path";

function filterFilesByExtension(
  directoryPath: string,
  fileExtension: string,
  callback: (err: NodeJS.ErrnoException | null, files?: string[]) => void
): void {
  fs.readdir(directoryPath, (err, files) => {
    if (err) {
      return callback(err);
    }

    const filteredFiles = files
      ? files.filter((file) => path.extname(file) === `.${fileExtension}`)
      : [];

    callback(null, filteredFiles);
  });
}

module.exports = filterFilesByExtension;
