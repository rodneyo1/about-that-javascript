function map(arr, callback) {
    const result = [];
    for (let i = 0; i < arr.length; i++) {
        result.push(callback(arr[i], i, arr));
    }
    return result;
}

// // Example usage:
// let numbers = [1, 2, 3];
// let doubled = map(numbers, num => num * 2);
// console.log(doubled); // [2, 4, 6]

function flatMap(arr, callback) {
    const result = [];
    for (let i = 0; i < arr.length; i++) {
        const mapped = callback(arr[i], i, arr);
        if (Array.isArray(mapped)) {
            result.push(...mapped); // Flatten by one level
        } else {
            result.push(mapped);
        }
    }
    return result;
}

// // Example usage:
// let nums = [1, 2, 3];
// let flatMapped = flatMap(nums, num => [num, num * 2]);
// console.log(flatMapped); // [1, 2, 2, 4, 3, 6]
