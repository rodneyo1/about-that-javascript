#!/usr/bin/env node

import fs from 'fs/promises'

const { argv } = process;

const veryDiscoWord = (word) => {
  const mid = Math.ceil(word.length / 2);
  return word.slice(mid) + word.slice(0, mid);
};

const veryDiscoArgument = (argument) => 
  argument.split(" ").map(veryDiscoWord).join(" ");

if (argv.length > 2) {
  const result = veryDiscoArgument(argv[2]);
  await fs.writeFile('verydisco-forever.txt', result);
} else {
  console.error("Please provide an argument to make very disco!");
}
