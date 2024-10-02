const trunc = (num) => {
    if (num >= 0) {
      return num - (num - parseInt(num));
    } else {
      return -((-num) - ((-num) - parseInt(-num)));
    }
  };
  
  const floor = (num) => {
    const truncated = trunc(num);
    return num < truncated ? truncated - 1 : truncated;
  };
  
  const ceil = (num) => {
    const truncated = trunc(num);
    return num > truncated ? truncated + 1 : truncated;
  };
  
  const round = (num) => {
    const truncated = trunc(num);
    const fractional = num - truncated;
    if (num >= 0) {
      return fractional >= 0.5 ? truncated + 1 : truncated;
    } else {
      return fractional > -0.5 ? truncated : truncated - 1;
    }
  };
  
  // Test the functions
  const nums = [3.7, -3.7, 3.1, -3.1];
  console.log(nums.map(round));
  console.log(nums.map(floor));
  console.log(nums.map(trunc));
  console.log(nums.map(ceil));