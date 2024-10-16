const filterKeys = (obj, fn) => {
    return Object.fromEntries(
      Object.entries(obj).filter(([key]) => fn(key))
    );
  };
  
  const mapKeys = (obj, fn) => {
    return Object.fromEntries(
      Object.entries(obj).map(([key, value]) => [fn(key), value])
    );
  };
  
  const reduceKeys = (obj, fn, initialValue = '') => {
    return Object.keys(obj).reduce((acc, key, index) => {
      return index === 0 ? key : fn(acc, key);
    }, initialValue);
  };
  
//   // Example usage:
//   const nutrients = { carbohydrates: 12, protein: 20, fat: 5 };
  
//   console.log(filterKeys(nutrients, (key) => /protein/.test(key)));
//   // Output: { protein: 20 }
  
//   console.log(mapKeys(nutrients, (k) => `-${k}`));
//   // Output: { -carbohydrates: 12, -protein: 20, -fat: 5 }
  
//   console.log(reduceKeys(nutrients, (acc, cr) => acc.concat(', ', cr)));
//   // Output: carbohydrates, protein, fat