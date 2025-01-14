// File I/O (Input/Output) allows you to read and write files. 
// In Node.js (which is often used for TypeScript applications), 
// the fs (File System) module is typically used to interact with 
// \the file system.


import * as fs from 'fs';
import * as path from 'path';

// Write to a file
function writeToFile(filename: string, content: string): void {
    fs.writeFileSync(filename, content, 'utf8');
    console.log(`Written to ${filename}`);
}

// Read from a file
function readFromFile(filename: string): string {
    if (!fs.existsSync(filename)) {
        throw new Error("File does not exist!");
    }
    return fs.readFileSync(filename, 'utf8');
}

const filePath = path.join(__dirname, 'example.txt');

try {
    writeToFile(filePath, "Hello, this is a test file!");
    const content = readFromFile(filePath);
    console.log(`File content: ${content}`);
} catch (error) {
    console.error(error.message);
}

// Explanation:

// fs.writeFileSync writes data to a file.
// fs.readFileSync reads data from a file.
// We handle errors using try-catch blocks.
