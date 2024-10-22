#!/usr/bin/env node

import fs from 'fs/promises';
import path from 'path';

const main = async () => {
  const filePath = process.argv[2]; // First argument: file to encode/decode
  const action = process.argv[3]; // Second argument: 'encode' or 'decode'
  const outputFileName = process.argv[4]; // Optional third argument: output file name

  if (!filePath || !action) {
    console.error('Usage: tell-it-cypher.mjs <file> <encode|decode> [output file]');
    process.exit(1);
  }

  try {
    // Read the file content
    const fileContent = await fs.readFile(filePath, { encoding: 'utf8' });

    let result;
    let outputFile;

    if (action === 'encode') {
      result = Buffer.from(fileContent).toString('base64');
      outputFile = outputFileName || 'cypher.txt';
    } else if (action === 'decode') {
      result = Buffer.from(fileContent, 'base64').toString('utf8');
      outputFile = outputFileName || 'clear.txt';
    } else {
      console.error('Invalid action. Use "encode" or "decode".');
      process.exit(1);
    }

    // Save the result to the specified output file
    await fs.writeFile(outputFile, result, { encoding: 'utf8' });

    console.log(`${action === 'encode' ? 'Encoded' : 'Decoded'} content saved to ${outputFile}`);
  } catch (err) {
    console.error('Error processing the file:', err.message);
  }
};

// Execute the script
main();
