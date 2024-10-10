function mult2(a) {
    return function(b) {
        return a * b;
    };
}

// // Example usage:
// console.log(mult2(3)(4)); // 12
function add3(a) {
    return function(b) {
        return function(c) {
            return a + b + c;
        };
    };
}

// // Example usage:
// console.log(add3(1)(2)(3)); // 6
function sub4(a) {
    return function(b) {
        return function(c) {
            return function(d) {
                return a - b - c - d;
            };
        };
    };
}

// // Example usage:
// console.log(sub4(10)(2)(1)(1)); // 6 (10 - 2 - 1 - 1)
