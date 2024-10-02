function getDecimalPart(x) {
  let intPart = 0;

  // Calculate the integer part by subtracting until we are within 1 for positives
  // or until we are above -1 for negatives
  if (x >= 0) {
    while (x >= 1) {
      x -= 1;
      intPart += 1;
    }
  } else {
    while (x < 0) {
      x += 1;
      intPart -= 1;
    }
  }

  // Return the decimal part
  return x; // This will be the remaining decimal part
}

// function floor1(x) {
//     if (x >= 0) {
//         return x - getDecimalPart(x);
//     } else {
//         return ceil(x)+1 ;
//     }
// }
function floor(x) {
    if (x >= 0) {
      return x - getDecimalPart(x);
    } else {
      const decimal = getDecimalPart(x);
      return decimal === 0 ? x +1: x - (1 + decimal);
    }
  }







// Custom round function using floor and getDecimalPart
function round(x) {
  // Check if the number is negative
  const isNegative = x < 0;

  // Use the absolute value for rounding
  const absX = Math.abs(x);
  const decimal = getDecimalPart(absX);

  let result;

  // Check if the decimal part is >= 0.5 to round up
  if (decimal >= 0.5) {
    result = floor(absX) + 1;
  } else {
    // If the decimal part is less than 0.5, just floor it
    result = floor(absX);
  }

  // Apply the original sign back to the result
  return isNegative ? -result : result;
}

function ceil(x) {
  const decimal = getDecimalPart(x);

  if (decimal === 0) {
    return x;
  }

  return floor(x) + 1;
}

function trunc(x) {
  if (x >= 0) {
    return floor(x);
  } else {
    return -floor(-x);
  }
}
