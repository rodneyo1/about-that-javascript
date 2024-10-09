// Fold function
function fold(arr, func, accumulator) {
    for (let i = 0; i < arr.length; i++) {
        accumulator = func(accumulator, arr[i]);
    }
    return accumulator;
}

// FoldRight function
function foldRight(arr, func, accumulator) {
    for (let i = arr.length - 1; i >= 0; i--) {
        accumulator = func(accumulator, arr[i]);
    }
    return accumulator;
}

// Reduce function
function reduce(arr, func) {
    if (arr.length < 1) {
        throw new Error('Add elements to array');
    }

    let accumulator = arr[0]
    for (let i = 1; i < arr.length; i++) {
        accumulator = func(accumulator, arr[i]);
    }
    return accumulator;
}

// ReduceRight function
function reduceRight(arr, func) {
    if (arr.length < 1) {
        throw new Error('Add elements to array.');
    }

    let accumulator = arr[arr.length - 1]; 
    for (let i = arr.length - 2; i >= 0; i--) {
        accumulator = func(accumulator, arr[i]);
    }
    return accumulator;
}

// // Example usage:
// const adder = (a, b) => a + b;

// console.log(fold([1, 2, 3], adder, 2));           // 8 (2 + 1 + 2 + 3)
// console.log(foldRight([1, 2, 3], adder, 2));      // 8 (2 + 3 + 2 + 1)
// console.log(reduce([1, 2, 3], adder));            // 6 (1 + 2 + 3)
// console.log(reduceRight([1, 2, 3], adder));       // 6 (3 + 2 + 1)
