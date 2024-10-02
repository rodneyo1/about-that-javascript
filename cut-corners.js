function round(num) {
    // If the fractional part is 0.5 or more, we round up, otherwise round down
    return num < 0 ? (num - 0.5 | 0) : (num + 0.5 | 0);
  }
  
  function ceil(num) {
    // If there is a fractional part, round up, otherwise leave the integer part
    return num === (num | 0) ? num : (num < 0 ? num | 0 : (num | 0) + 1);
  }
  
  function floor(num) {
    // If there is a fractional part and the number is negative, round down
    return num === (num | 0) ? num : (num < 0 ? (num | 0) - 1 : num | 0);
  }
  
  function trunc(num) {
    // Simply remove the fractional part
    return num | 0;
  }
  
  
//   // Example usage
//   const nums = [3.7, -3.7, 3.1, -3.1];
//   console.log(nums.map(round));  // Output: [4, -4, 3, -3]
//   console.log(nums.map(floor));  // Output: [3, -4, 3, -4]
//   console.log(nums.map(trunc));  // Output: [3, -3, 3, -3]
//   console.log(nums.map(ceil));   // Output: [4, -3, 4, -3]
  