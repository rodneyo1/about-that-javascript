const multiply = (a, b) => {
    let res = 0;
    let sign = "";
  
    if ((a < 0 && b > 0) || (a > 0 && b < 0)) {
      sign = "-";
      a=Math.abs(a)
      b=Math.abs(b)
    } else{
      a=Math.abs(a)
      b=Math.abs(b)
    }
  
    while (b > 0) {
      res += a;
      b--;
    }
  
    return parseInt(sign + res.toString());
  };
  
  const divide = (a, b) => {
    let res = 0;
    let sign = "";
  
    if ((a < 0 && b > 0) || (a > 0 && b < 0)) {
      sign = "-";
      a=Math.abs(a)
      b=Math.abs(b)
    }
    a=Math.abs(a)
    b=Math.abs(b)
    while (a - b >= 0) {
      a -= b;
      res++;
    }
  
    return parseInt(sign + res.toString());
  };
  
  const modulo = (a, b) => {
    let res = 0;
    let sign = "";
  
    if ((a < 0 && b > 0) || (a > 0 && b < 0)) {
      sign = "-";
      if (a > 0 && b < 0){
        sign=""
      }
      a=Math.abs(a)
      b=Math.abs(b)
    } else if (a < 0 && b < 0){
        sign="-"
    }
    a=Math.abs(a)
     b=Math.abs(b)
  
    while (a - b >= 0) {
      a -= b;
      res++;
    }
  
    return parseInt(sign + a.toString());
  };
  //console.log(modulo(0,0))
//   console.log(0%0)