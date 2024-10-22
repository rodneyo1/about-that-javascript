#!/usr/bin/env node

import fs from 'fs/promises';
import path from 'path';

const main = async () => {
  const dirPath = process.argv[2] ? path.resolve(process.argv[2]) : process.cwd();

  try {
    // Read the directory entries
    const entries = await fs.readdir(dirPath);
    console.log(entries.length);
  } catch (err) {
    console.error("Error reading directory:", err.message);
  }
};

// Execute
main();
