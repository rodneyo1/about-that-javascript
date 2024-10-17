// Basic throttle function
function throttle(func, wait) {
    let timeout = null;
    let lastExec = 0;
  
    return function (...args) {
      const context = this;
      const now = Date.now();
  
      if (now - lastExec >= wait) {
        if (timeout) {
          clearTimeout(timeout);
          timeout = null;
        }
        func.apply(context, args);
        lastExec = now;
      } else if (!timeout) {
        timeout = setTimeout(() => {
          func.apply(context, args);
          lastExec = Date.now();
          timeout = null;
        }, wait);
      }
    };
  }
  
  
//   // Throttle function with options
//   function opThrottle(func, wait, options = {}) {
//     let timeout = null;
//     let lastExec = 0;
//     let lastArgs = null;
//     const { leading = true, trailing = true } = options;
  
//     return function (...args) {
//       const context = this;
//       const now = Date.now();
  
//       if (!lastExec && !leading) {
//         lastExec = now;
//       }
  
//       const remaining = wait - (now - lastExec);
  
//       if (remaining <= 0 || remaining > wait) {
//         if (timeout) {
//           clearTimeout(timeout);
//           timeout = null;
//         }
//         lastExec = now;
//         func.apply(context, args);
//       } else if (!timeout && trailing) {
//         lastArgs = args;
//         timeout = setTimeout(() => {
//           lastExec = leading ? Date.now() : 0;
//           timeout = null;
//           func.apply(context, lastArgs);
//         }, remaining);
//       }
//     };
//   }