const trunc = (num) => {
    const strNum = String(num);
    let decimalIndex = strNum.indexOf('.');
    
    if (decimalIndex === -1) {
        return num; // No decimal point, it's already truncated.
    }
    
    return parseFloat(strNum.slice(0, decimalIndex)); // Remove decimal part.
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
    if (num >= 0) {
        return floor(num + 0.5);
    } else {
        return ceil(num - 0.5);
    }
};

// // Test the functions
// const nums = [3.7, -3.7, 3.1, -3.1];
// console.log(nums.map(round));
// console.log(nums.map(floor));
// console.log(nums.map(trunc));
// console.log(nums.map(ceil));
