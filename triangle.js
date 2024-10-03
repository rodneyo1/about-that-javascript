function triangle(char, h) {
  let result = '';

  for (let i = 1; i <= h; i++) {
    result += char.repeat(i);
    if (i !== h) {
      result += '\n'; 
    }
  }

  return result;
}

// console.log(triangle('pop', 5));