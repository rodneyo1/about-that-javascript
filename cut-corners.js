const round = (num) => {
    const intPart = trunc(num);
    const fracPart = num - intPart;
    if (num >= 0) {
      return fracPart >= 0.5 ? intPart + 1 : intPart;
    } else {
      return fracPart > -0.5 ? intPart : intPart - 1;
    }
  };
  
  const ceil = (num) => {
    const intPart = trunc(num);
    return num > intPart ? intPart + 1 : intPart;
  };
  
  const floor = (num) => {
    const intPart = trunc(num);
    return num < intPart ? intPart - 1 : intPart;
  };
  
  const trunc = (num) => {
    return num < 0 ? -trunc(-num) : (0.5 + num) << 0;
  };
  
  // Test the functions
  const nums = [3.7, -3.7, 3.1, -3.1];
  console.log(nums.map(round));
  console.log(nums.map(floor));
  console.log(nums.map(trunc));
  console.log(nums.map(ceil));