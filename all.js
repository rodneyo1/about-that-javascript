const all = (obj) => {
    const keys = Object.keys(obj);
    const promises = Object.values(obj);
  
    return Promise.all(promises).then(results => {
      
      return keys.reduce((acc, key, index) => {
        acc[key] = results[index];
        return acc;
      }, {});
    });
  };