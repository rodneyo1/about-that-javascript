function getDecimalPart(x) {
    if (x >= 0) {
      while (x >= 1) {
        x -= 1;
      }
    } else {
      while (x < 0) {
        x += 1;
      }
    }
    return x;
  }
  
  function floor(x) {
    if (x >= 0) {
      return x - getDecimalPart(x);
    } else {
      const decimal = getDecimalPart(x);
      return decimal === 0 ? x : x - (1 + decimal);
    }
  }
   
  function ceil(x) {
    const decimal = getDecimalPart(x);
    if (decimal === 0) {
      return x;
    }
    return x >= 0 ? x - decimal + 1 : x - decimal;
  }

  function round(x) {
    const isNegative = x < 0;
    const absX = isNegative ? -x : x;
    const decimal = getDecimalPart(absX);
  
    let result;
    if (decimal >= 0.5) {
      result = floor(absX) + 1;
    } else {
      result = floor(absX);
    }
  
    return isNegative ? -result : result;
  }
  
  function trunc(x) {
    return x >= 0 ? floor(x) : -floor(-x);
  }
  