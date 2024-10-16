function deepCopy(obj) {
    if (typeof obj !== 'object' || obj === null) {
      return obj;
    }
  
    const copy = Array.isArray(obj) ? [] : {};
  
    for (const key in obj) {
      if (obj.hasOwnProperty(key)) {
        copy[key] = deepCopy(obj[key]);
      }
    }
  
    return copy;
  }