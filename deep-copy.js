function deepCopy(elem) {
    if (Array.isArray(elem)) {
      let newArr = new Array;
      for (const value of elem) {
        Array.isArray(value)? newArr.push(deepCopy(value)): newArr.push(value);
      }
      return newArr;
    } else {
      let newObj = new Object;
      for (const [key, value] of Object.entries(elem)) {
        newObj[key] = typeof value === "object"? deepCopy(elem[key]): value;
      }
      return newObj;
    }
  }
// // Example usage:
// const original = {
//     name: 'apple',
//     details: {
//         color: 'red',
//         nutrients: {
//             calories: 52,
//             vitamins: ['A', 'C'],
//         },
//     },
//     types: ['fuji', 'gala', 'honeycrisp']
// };

// const copied = deepCopy(original);
// console.log(copied);
// console.log(copied === original); // false, because it's a deep copy
// console.log(copied.details === original.details); // false, different object references