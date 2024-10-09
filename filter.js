function filter(arr, callback) {
    const result = [];
    for (let i = 0; i < arr.length; i++) {
        if (callback(arr[i], i, arr)) {
            result.push(arr[i]);
        }
    }
    return result;
}

// // Example usage:
// let numbers = [1, 2, 3, 4, 5];
// let evenNumbers = filter(numbers, num => num % 2 === 0);
// console.log(evenNumbers); // [2, 4]

function reject(arr, callback) {
    const result = [];
    for (let i = 0; i < arr.length; i++) {
        if (!callback(arr[i], i, arr)) {
            result.push(arr[i]);
        }
    }
    return result;
}

// // Example usage:
// let oddNumbers = reject(numbers, num => num % 2 === 0);
// console.log(oddNumbers); // [1, 3, 5]

function partition(arr, callback) {
    const pass = [];
    const fail = [];
    for (let i = 0; i < arr.length; i++) {
        if (callback(arr[i], i, arr)) {
            pass.push(arr[i]);
        } else {
            fail.push(arr[i]);
        }
    }
    return [pass, fail];
}

// // Example usage:
// let partitioned = partition(numbers, num => num % 2 === 0);
// console.log(partitioned); // [[2, 4], [1, 3, 5]]
