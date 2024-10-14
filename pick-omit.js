function pick(obj, keys) {
    if (!Array.isArray(keys)) {
      keys = [keys];
    }
    return Object.fromEntries(Object.entries(obj).filter(([key]) => keys.includes(key)));
  }
  
  function omit(obj, keys) {
    if (!Array.isArray(keys)) {
      keys = [keys];
    }
    return Object.fromEntries(Object.entries(obj).filter(([key]) => !keys.includes(key)));
  }
//   const originalObject = { a: 1, b: 2, c: 3, d: 4 };

// const pickedObject = pick(originalObject, ['a', 'c']);
// console.log(pickedObject)

// const omittedObject = omit(originalObject, 'b')
// console.log(omittedObject)