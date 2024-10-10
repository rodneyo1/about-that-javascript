// Function to check if every element in the array satisfies the condition
function every(arr, func) {
    for (let i = 0; i < arr.length; i++) {
        if (!func(arr[i])) {
            return false; // If one element does not satisfy the condition, return false
        }
    }
    return true; // All elements satisfy the condition
}

// Function to check if at least one element in the array satisfies the condition
function some(arr, func) {
    for (let i = 0; i < arr.length; i++) {
        if (func(arr[i])) {
            return true; // If one element satisfies the condition, return true
        }
    }
    return false; // None of the elements satisfy the condition
}

// Function to check if none of the elements in the array satisfy the condition
function none(arr, func) {
    for (let i = 0; i < arr.length; i++) {
        if (func(arr[i])) {
            return false; // If one element satisfies the condition, return false
        }
    }
    return true; // None of the elements satisfy the condition
}

// Example usage:

// let numbers = [1, 2, 3, 4, 5];

// console.log(every(numbers, num => num > 0));  // true
// console.log(some(numbers, num => num > 4));   // true
// console.log(none(numbers, num => num > 5));   // true
