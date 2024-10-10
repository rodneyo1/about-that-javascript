function flow(functions) {
    return function(...arguments) {
        let result = functions[0](...arguments);
        
        for (let i = 1; i < functions.length; i++) {
            result = functions[i](result);
        }
        
        // return result;
    };
}

// // Example usage:

// const square = (nbr) => nbr * nbr;
// const add2Numbers = (nbr1, nbr2) => nbr1 + nbr2;

// const flowedFunctions = flow([add2Numbers, square]);

// console.log(flowedFunctions(2, 3)); // 25 (first adds 2+3 = 5, then squares 5 = 25)
