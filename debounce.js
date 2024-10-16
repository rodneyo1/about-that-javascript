function debounce(func, wait) {
    let timeout;
    return function(...args) {
      const context = this;
      clearTimeout(timeout);
      timeout = setTimeout(() => func.apply(context, args), wait);
    };
  }
  
  function opDebounce(func, wait, options = { leading: false }) {
    let timeout
    let isCalled = false;  // Tracks if the function was already called
  
    return function (...args) {
      if (options.leading && !isCalled) {
        func.apply(this, args); // Call the function right away (leading)
        isCalled = true
      }
  
      clearTimeout(timeout);  // Clear any previous timeout
      timeout = setTimeout(() => {
        isCalled = false;  // Reset for the next call
        if (!options.leading) {  // Only call on the trailing edge if leading is false
          func.apply(this, args);
        }
      }, wait);
    };
  }