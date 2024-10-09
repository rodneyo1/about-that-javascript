function forEach(arr, callback) {
    for (let i = 0; i < arr.length; i++) {
        callback(arr[i], i, arr);
    }
}

// // Example usage:
// let arr = [2, 3, 4];

// function logElement(element, index, array) {
//     console.log(`Element: ${element}, Index: ${index}, Array: ${array}`);
// }

// // Call the custom forEach
// forEach(arr, logElement);
