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

  