#!/usr/bin/env node

import fs from 'fs/promises';
import path from 'path';

const main = async () => {
  // Get the directory path from command line arguments or use the current directory
  const dirPath = process.argv[2] ? path.resolve(process.argv[2]) : process.cwd();

  try {
    // Read the directory entries
    const entries = await fs.readdir(dirPath);
    // Print the number of entries
    console.log(`Number of entries in "${dirPath}": ${entries.length}`);
  } catch (err) {
    console.error("Error reading directory:", err.message);
  }
};

// Execute the main function
main();
