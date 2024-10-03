function get(src, path) {
    const keys = path.split('.');
    let result = src; // Start with the src object
    
    // drill down into the object
    for (let key of keys) {
      if (result === undefined || result === null) {
        return undefined; 
      }
      result = result[key];
    }
  
    return result;
  }
//   const src = { nested: { key: 'peekaboo' } }
// const path = 'nested.key'

// console.log(get(src, path))