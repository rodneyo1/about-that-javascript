function pyramid(char, height) {
    let result = '';
  
    for (let i = 1; i <= height; i++) {
      const spaces = ' '.repeat(height - i); // Add spaces to center the pyramid
      const chars = char.repeat(i * 2 - 1);  // Characters increase by 2 in each row
      result += spaces + chars;
  
      if (i !== height) {
        result += '\n'; // Add a new line after each row, except the last one
      }
    }
  
    return result;
  }
  console.log(pyramid('*', 5));