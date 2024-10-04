function letterSpaceNumber(str) {
    // Regular expression to match a letter followed by a space and a single-digit number not followed by any letter
    const regex = /[a-zA-Z] \d(?![a-zA-Z])/g;
    const matches = str.match(regex);

    // Return the matches, or an empty array if there are none
    return matches || [];
}

// console.log(letterSpaceNumber("m 1n 2o 345"));
// console.log(letterSpaceNumber("a 1 b 2c 3"));
// console.log(letterSpaceNumber("x 4y 5 z 9"));

