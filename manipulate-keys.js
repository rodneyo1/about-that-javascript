// filterKeys function - filters keys based on the provided predicate
function filterKeys(obj, predicate) {
    return Object.fromEntries(Object.entries(obj).filter(([key]) => predicate(key)));
  }
  
  // mapKeys function - maps over the keys and returns a new object with modified keys
  function mapKeys(obj, callback) {
    return Object.fromEntries(Object.entries(obj).map(([key, value]) => [callback(key), value]));
  }
  
  // reduceKeys function - reduces the keys based on the provided reducer function
  function reduceKeys(obj, reducer, initialValue = '') {
    return Object.keys(obj).reduce((acc, key) => {
      return reducer(acc, key);
    }, initialValue);
  }
  
//   const nutrients = { carbohydrates: 12, protein: 20, fat: 5 };
//   console.log(filterKeys(nutrients, (key) => /protein/.test(key)));
//   console.log(mapKeys(nutrients, (k) => `-${k}`));
//   console.log(reduceKeys(nutrients, (acc, cr) => acc.concat(', ', cr), ''))
  