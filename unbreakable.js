function split(s, sep) {
    if (sep === "") {
      return [s];
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
      }
    }
  
    // Append the last substring (after the final separator) to the result
    result.push(s.slice(start));
    
    return result;
  }
  
//   console.log(split("hello world go","o"))