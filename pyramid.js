function pyramid(char, height) {
  let result = '';

  for (let i = 1; i <= height; i++) {
    const spaces = ' '.repeat(height - i); // One space per level to center the pyramid
    const chars = char.repeat(i * 2 - 1);  // Characters increase by 2 in each row

    if (i > 1) {
      result += '\n'; // Prepend newline for rows after the first one
    }

    result += spaces + chars;
  }

  return result;
}

// console.log(pyramid('a', 5));
