#!/usr/bin/env node

const { argv } = process;

function veryDiscoWord(word) {
  const chars = word.split("");
  const mid = Math.ceil(chars.length / 2);

  // Extract halves
  const firstHalf = chars.slice(0, mid);
  const secondHalf = chars.slice(mid);

  // Combine the halves in reverse order
  return [...secondHalf, ...firstHalf].join("");
}

function veryDiscoArgument(argument) {
  const words = argument.split(" ");
  const veryDiscoWords = words.map(veryDiscoWord);
  return veryDiscoWords.join(" ");
}

// Handle the first argument
if (argv.length > 2) {
  const argument = argv[2];
  const veryDiscoResult = veryDiscoArgument(argument);
  console.log(veryDiscoResult, " ()");
} else {
  console.error("Please provide an argument to make very disco!");
}