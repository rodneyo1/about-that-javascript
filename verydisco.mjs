#!/usr/bin/env node

const { argv } = process;

const veryDiscoWord = (word) => {
  const mid = Math.ceil(word.length / 2);
  return word.slice(mid) + word.slice(0, mid);
};

const veryDiscoArgument = (argument) => 
  argument.split(" ").map(veryDiscoWord).join(" ");

// Handle the first argument
if (argv.length > 2) {
  console.log(veryDiscoArgument(argv[2]));
} else {
  console.error("Please provide an argument to make very disco!");
}
