function all(promisesObj) {
  const keys = Object.keys(promisesObj);

  // If the object is empty, return a resolved promise with an empty object
  if (keys.length === 0) {
    return Promise.resolve({});
  }

  // Wrap each value in Promise.resolve to handle both promises and synchronous values
  const values = keys.map(key => Promise.resolve(promisesObj[key]));

  return Promise.all(values).then(resolvedValues => {
    const result = {};
    keys.forEach((key, index) => {
      result[key] = resolvedValues[index];
    });
    return result;
  });
}

// const emptyObject = {};

// all(emptyObject).then(result => console.log(result)); 

// const promises = {
//   first: Promise.resolve(1),
//   second: Promise.resolve(2),
//   third: new Promise(resolve => setTimeout(() => resolve(3), 1000))
// };

// all(promises).then(result => console.log(result));
// // Output: { first: 1, second: 2, third: 3 }
