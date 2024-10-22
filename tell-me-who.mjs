#!/usr/bin/env node

import fs from 'fs/promises';
import path from 'path';

const main = async () => {
  const dirPath = process.cwd();


  try {
    // Read the directory entries
    const entries = await fs.readdir(dirPath);
    let i=1
    entries.forEach((entry) =>{
        let names=entry.split('_')
        let lastname=names[1].split('.json')
        console.log(i,names[0],lastname[0])
        i++
    } )
  } catch (err) {
    console.error("Error reading directory:", err.message);
  }
};

// Execute
main();
