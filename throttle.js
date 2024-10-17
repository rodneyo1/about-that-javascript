// Basic throttle function
function throttle(func, wait = 0) {
    let called = false
    return (...args) => {
        if (!called) {
            func(...args)
            called = true
            setTimeout(() => called = false, wait)
        }
    }
}
  
  
  function opThrottle(func, wait = 0, options = {leading: false, trailing: true}) {
    if (options["trailing"] && options["leading"]) return throttle(func, wait)
    let called = false
    let timer
    return (...args) => {
        if (!called) {
            if (options["leading"]) func(...args)
            called = true
            if (options["trailing"]) clearTimeout(timer)
            setTimeout(() => {
                called = false
                if (options["trailing"]) func(...args)
            }, wait)
        }
    }
}