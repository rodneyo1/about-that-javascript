function nasa(N) {
    result = [];
  
    for (let i = 1; i <= N; i++) {
      if (i % 15 === 0) {
        result.push("NASA");
      } else if (i % 3 === 0) {
        result.push("NA");
      } else if (i % 5 === 0) {
        result.push("SA");
      } else {
        result.push(i);
      }
    }
  
    return result.join(" ");
  }
  
  // // Example usage:
  // console.log(nasa(15)); // Output: 1 2 NA SA NA 6 7 NA SA NA 11 12 NASA 14 SA