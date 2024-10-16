// Main functions working on entries
const filterEntries = (obj, fn) => {
    return Object.fromEntries(
      Object.entries(obj).filter(([k, v]) => fn([k, v]))
    );
  };
  
  const mapEntries = (obj, fn) => {
    return Object.fromEntries(
      Object.entries(obj).map(([k, v]) => fn([k, v]))
    );
  };
  
  const reduceEntries = (obj, fn, initialValue) => {
    return Object.entries(obj).reduce((acc, [k, v]) => fn(acc, [k, v]), initialValue);
  };
  
  // Additional functions using the above
  const totalCalories = (cart) => {
    return +(reduceEntries(cart, (total, [item, grams]) => {
      return total + (nutritionDB[item].calories * grams / 100);
    }, 0)).toFixed(1);
  };
  
  const lowCarbs = (cart) => {
    return filterEntries(cart, ([item, grams]) => {
      return (nutritionDB[item].carbs * grams / 100) < 50;
    });
  };
  
  function cartTotal(cart) {
    return mapEntries(cart, (item) => {
        const newObj2 = new Object
        for (const [key, value] of Object.entries(nutritionDB[item[0]])) {
            newObj2[key] = Number.parseInt(value * item[1] * 100) / 10000
        }
        return [item[0], newObj2]
    })
}
  
//   // Example usage:
//   const groceriesCart = { orange: 500, oil: 20, sugar: 480 };
  
//   console.log('Total calories:');
//   console.log(totalCalories(groceriesCart));
  
//   console.log('Items with low carbs:');
//   console.log(lowCarbs(groceriesCart));
  
//   console.log('Total cart nutritional facts:');
//   console.log(cartTotal(groceriesCart));