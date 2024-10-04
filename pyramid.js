function pyramid(char, height) {
  let result = '';

  for (let i = 1; i <= height; i++) {
    const spaces = ' '.repeat((height - i) * 2); // Two spaces per level to match expected output
    const chars = char.repeat(i * 2 - 1);  // Characters increase by 2 in each row

    if (i > 1) {
      result += '\n'; // Prepend newline for rows after the first one
    }

    result += spaces + chars;
  }

  return result;
}

// console.log(pyramid('{}', 12));
