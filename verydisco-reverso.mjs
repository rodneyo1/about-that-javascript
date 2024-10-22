#!/usr/bin/env node

import fs from 'fs/promises';

const veryDiscoWordReverse = (word) => {
  const mid = Math.ceil(word.length / 2);
  return word.slice(-mid) + word.slice(0, -mid);
};

const reverse = (argument) => 
  argument.split(" ").map(veryDiscoWordReverse).join(" ");

// Main function to handle the file reading and processing
const main = async () => {
  const [filename] = process.argv.slice(2);

  if (!filename) {
    console.error("Provide a filename as the first argument!");
    return;
  }

  try {
    const data = await fs.readFile(filename, 'utf-8');
    const result = reverse(data);
    console.log(result);
  } catch (err) {
    console.error("Error reading file:", err.message);
  }
};

main();
