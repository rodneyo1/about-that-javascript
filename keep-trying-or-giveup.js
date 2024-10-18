const retry = (count, callback) => {
    return async (...args) => {
      for (let attempt = 0; attempt <= count; attempt++) {
        try {
          return await callback(...args);
        } catch (error) {
          if (attempt === count) {
            throw error; // Throw the last error on final attempt
          }
        }
      }
    };
  };
  
  // Timeout function (unchanged)
  const timeout = (delay, callback) => {
    return async (...args) => {
      const timeoutPromise = new Promise((_, reject) => {
        setTimeout(() => reject(new Error('timeout')), delay);
      });
  
      return Promise.race([
        callback(...args),
        timeoutPromise
      ]);
    };
  };
  