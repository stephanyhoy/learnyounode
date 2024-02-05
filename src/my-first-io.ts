// Include the 'fs' module from the Node core library
const fs = require("fs");

// Get the file path from the command-line arguments (provided as process.argv[2])
const filePath = process.argv[2];

// Use a synchronous filesystem operation to read the file
// 'readFileSync' returns a Buffer object containing the complete contents of the file
const fileContentBuffer = fs.readFileSync(filePath);

// Convert the Buffer object to a string using the 'toString()' method
const fileContentString = fileContentBuffer.toString();

// Split the string into an array of substrings using '\n' as a delimiter
// Counting the number of newlines in the file
const numberOfNewlines = fileContentString.split("\n").length - 1;

// Print the number of newlines to the console (stdout)
console.log(numberOfNewlines);
