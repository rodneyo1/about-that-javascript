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


  //For array types, you will concatenate them.

  fusion({ arr: [1, "2"] }, { arr: [2] }); // -> { arr: [ 1, '2', 2 ] }
  fusion({ arr: [], arr1: [5] },{ arr: [10, 3], arr1: [15, 3], arr2: ["7", "1"] }); // ->{ arr: [ 10, 3 ], arr1: [ 5, 15, 3 ], arr2: [ '7', '1' ] }
  
     // For strings, you must concatenate them with a space.
  
  fusion({ str: "salem" }, { str: "alem" }); // -> { str: 'salem alem' }
  fusion({ str: "salem" }, { str: "" }); // -> { str: 'salem ' }
  
     // If they are numbers, you must add them.
  
  fusion({ a: 10, b: 8, c: 1 }, { a: 10, b: 2 }); // -> { a: 20, b: 10, c: 1 }
  
     // If it is an object, you must join them recursively.
  
  fusion({ a: 1, b: { c: "Salem" } }, { a: 10, x: [], b: { c: "alem" } }); // -> { a: 11, x: [], b: { c: 'Salem alem' } }
  fusion( { a: { b: [3, 2], c: { d: 8 } } },{ a: { b: [0, 3, 1], c: { d: 3 } } }); // -> { a: { b: [ 3, 2, 0, 3, 1 ], c: { d: 11 } } }
  
    //  In case of type mismatch you must replace it with the value of the second object (if it exists).
  
  fusion({ a: "hello", b: [] }, { a: 4 }); // -> { a: 4, b: [] }
  