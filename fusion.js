function fusion(obj1, obj2) {
    return Object.keys({ ...obj1, ...obj2 }).reduce((acc, key) => {
      const value1 = obj1[key];
      const value2 = obj2[key];
  
      if (typeof value1 !== typeof value2) {
        acc[key] = value2 !== undefined ? value2 : value1;
        return acc;
      }
  
      if (Array.isArray(value1)) {
        acc[key] = [...value1, ...value2];
      } else if (typeof value1 === 'string') {
        acc[key] = `${value1} ${value2}`;
      } else if (typeof value1 === 'number') {
        acc[key] = value1 + value2;
      } else if (typeof value1 === 'object') {
        acc[key] = fusion(value1, value2);
      }
  
      return acc;
    }, {});
  }

  const nutrients = { carbohydrates: 12, protein: 20, fat: 5 }

console.log(filterValues(nutrients, (nutrient) => nutrient <= 12))
// output: { carbohydrates: 12, fat: 5 }

console.log(mapValues(nutrients, (v) => v+1))
// output: { carbohydrates: 13, protein: 21, fat: 6 }

console.log(reduceValues(nutrients, (acc, cr) => acc + cr))
// output: 37