const multiply = (a, b) => {
    let res = 0;
    let sign = 1;
  
    if ((a < 0 && b > 0) || (a > 0 && b < 0)) {
      sign = -1;
    }
  
    while (b > 0) {
      res += a;
      b--;
    }
  
    return sign * res;
  };
  
  const divide = (a, b) => {
    let res = 0;
    let sign = 1;
  
    if ((a < 0 && b > 0) || (a > 0 && b < 0)) {
      sign = -1;
    }
  
    while (a - b >= 0) {
      a -= b;
      res++;
    }
  
    return sign * res;
  };
  
  const modulo = (a, b) => {
    let res = 0;
    let sign = 1;
  
    if ((a < 0 && b > 0) || (a > 0 && b < 0)) {
      sign = -1;
    }
  
    while (a - b >= 0) {
      a -= b;
      res++;
    }
  
    return sign * a;
  };