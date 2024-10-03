function reverse(input) {
    if (typeof input === 'string') {
      // Convert the string to an array, reverse it, and join it back into a string
      return input.split('').reverse().join('');
    } else if (Array.isArray(input)) {
      // Handle array reversal
      let n = input.length - 1;
      let res = [];
      for (let i = n; i >= 0; i--) {
        res.push(input[i]);
      }
      return res;
    }
  }
  
//Array.prototype.reverse = reverse
// let a=[1, 2, 3]
// console.log(a.reverse())
// console.log(reverse(a))
