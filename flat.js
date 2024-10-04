function flat(arr, depth = 1) {
    let result = [];
    let stack = arr.map(item => [item, depth]); 
  
    while (stack.length > 0) {
      let [item, currentDepth] = stack.pop();
  
      if (Array.isArray(item) && currentDepth > 0) {
        stack.push(...item.map(subItem => [subItem, currentDepth - 1]));
      } else {
        result.push(item);
      }
    }
    return result.reverse();
  }

// const arr1 = [0, 1, 2, [3, 4]];

// console.log(arr1.flat());
// console.log(flata(arr1));
// const arr2 = [0, 1, [2, [3, [4, 5]]]];
// console.log(flata(arr2));
// console.log(arr2.flat());