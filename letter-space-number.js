function letterSpaceNumber(str) {
    const regex = /\b[a-zA-Z]\s\d\b/;
    const matches = str.matchAll(regex);
    return Array.from(matches);
  }
  
// console.log(letterSpaceNumber("m 1n 2o 345"));
// console.log(letterSpaceNumber("a 1 b 2c 3"));
// console.log(letterSpaceNumber("x 4y 5 z 9"));

