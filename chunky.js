function chunk(array, size) {
  if (size <= 0) {
    return [];
  }

  const result = [];
  for (let i = 0; i < array.length; i += size) {
    result.push(array.slice(i, i + size));
  }

  return result;
}

// Example usage:
// const numbers = [1, 2, 3, 4, 5, 6, 7];
// const chunkedNumbers = chunk(numbers, 3);
// console.log(chunkedNumbers); // Output: [[1, 2, 3], [4, 5, 6], [7]]