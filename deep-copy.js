function deepCopy(value) {
    // Check if value is an array
    if (Array.isArray(value)) {
        return value.map(item => deepCopy(item)); // Recursively copy each item
    }
    
    // Check if value is an object
    if (value !== null && typeof value === 'object') {
        const newObj = {};
        for (const [key, val] of Object.entries(value)) {
            newObj[key] = deepCopy(val); // Recursively copy each property
        }
        return newObj;
    }
    
    // If it's neither an array nor an object, return the value directly
    return value;
}
// // Example usage:
// const original = {
//     name: 'apple',
//     details: {
//         color: 'red',
//         nutrients: {
//             calories: 52,
//             vitamins: ['A', 'C'],
//         },
//     },
//     types: ['fuji', 'gala', 'honeycrisp']
// };

// const copied = deepCopy(original);
// console.log(copied);
// console.log(copied === original); // false, because it's a deep copy
// console.log(copied.details === original.details); // false, different object references