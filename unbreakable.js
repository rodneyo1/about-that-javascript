function split(s, sep) {
    if (s===""){
        return [""]
    }
    if (sep === "") {
        let res=[]
        for (let i = 0;i < s.length;i++) {
        res.push(s[i])
        }
      return res;
    }
  
    let result = [];
    let start = 0;
  
    // Iterate over the string, looking for occurrences of the separator
    for (let i = 0; i + sep.length <= s.length; i++) {
      if (s.slice(i, i + sep.length) === sep) {
        // Append the substring before the separator to the result
        result.push(s.slice(start, i));
        // Update the start index for the next substring
        start = i + sep.length;
        // Skip ahead by the length of the separator to avoid overlapping
        i += sep.length - 1;
      }
    }
  
    // Append the last substring (after the final separator) to the result
    if (start < s.length || s.endsWith(sep)) {
      result.push(s.slice(start));
    }
  
    return result;
  }
  
  function replicateJoin(array, separator = ',') {
    if (!Array.isArray(array)) {
      throw new TypeError('Argument must be an array');
    }
  
    if (array.length === 0) {
      return '';
    }
  
    let result = '';
    for (let i = 0; i < array.length; i++) {
      result += array[i];
      if (i < array.length - 1) {
        result += separator;
      }
    }
    return result;
  }
  
//   // Test cases
//   const numbers = [1, 2, 3];
//   const strings = ['hello', 'world'];
//   const mixed = [1, 'hello', true];
//   const empty = [];
  
//   console.log(replicateJoin(numbers)); // Output: 1,2,3
//   console.log(replicateJoin(strings)); // Output: hello,world
//   console.log(replicateJoin(mixed)); // Output: 1,hello,true
//   console.log(replicateJoin(empty)); // Output: '' 