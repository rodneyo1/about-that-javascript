function getDecimalPart(x) {
  return x - (x < 0 ? -1 : 1) * ~~Math.abs(x);
}

function floor(x) {
  if (x >= 0) {
    return x - getDecimalPart(x);
  } else {
    const decimal = getDecimalPart(x);
    if (decimal === 0) {
      return x;
    } else {
      return x - (1 + decimal);
    }
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

function customCeil(x) {
  const decimal = getDecimalPart(x);

  if (decimal === 0) {
    return x;
  }

  return floor(x) + 1;
}

function customTrunc(x) {
    if (x >= 0) {
        return floor(x);
    } else {
        return -floor(-x);
    }
}

