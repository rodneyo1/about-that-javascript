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
  
  
  function opThrottle(func, wait = 0, options = {leading: false, trailing: true}) {
    if (options["leading"] && options["trailing"]) return throttle(func, wait)
    let invoked = false
    let timer
    return (...args) => {
        if (!invoked) {
            if (options["leading"]) func(...args)
            invoked = true
            if (options["trailing"]) clearTimeout(timer)
            setTimeout(() => {
                invoked = false
                if (options["trailing"]) func(...args)
            }, wait)
        }
    }
}