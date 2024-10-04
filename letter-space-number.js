function letterSpaceNumber(str) {
    // Use regex to find patterns of a letter followed by a space and a single digit number
    const pattern = /[a-zA-Z] \d(?!\d|[a-zA-Z])/g;
    const matches = str.match(pattern);
    return matches || [];
}

// Example usage:
// const inputString = "He is 8 or 9 years old, not 10.";
// const result = letterSpaceNumber(inputString);
// console.log(result);  // Output: ['s 8', 'r 9']
