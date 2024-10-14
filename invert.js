function invert(obj) {
    return Object.entries(obj).reduce((acc, [key, value]) => ({ ...acc, [value]: key }), {});
  }

const originalObject = { a: 1, b: 2, c: 3 };
const invertedObject = invert(originalObject);
console.log(invertedObject)