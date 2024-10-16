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
  
  function reduceKeys(nutrients, f, acc = undefined) {
    let reduced = acc? acc : Object.entries(nutrients)[0][0]
    if (acc === 0) reduced = 0
    if (acc) {
        for (const [key] of Object.entries(nutrients)) 
        {
        reduced = f(reduced, key, acc)
        } 
    } else {
        for (let i = 1; i < Object.entries(nutrients).length; i++) {
            reduced = f(reduced, Object.entries(nutrients)[i][0])
        }
    }
    return reduced
}
  
//   // Example usage:
//   const nutrients = { carbohydrates: 12, protein: 20, fat: 5 };
  
//   console.log(filterKeys(nutrients, (key) => /protein/.test(key)));
//   // Output: { protein: 20 }
  
//   console.log(mapKeys(nutrients, (k) => `-${k}`));
//   // Output: { -carbohydrates: 12, -protein: 20, -fat: 5 }
  
//   console.log(reduceKeys(nutrients, (acc, cr) => acc.concat(', ', cr)));
//   // Output: carbohydrates, protein, fat