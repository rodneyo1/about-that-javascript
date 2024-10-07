function isValid(date) {
    return date instanceof Date && !isNaN(date);
}

// // Example usage:
// console.log(isValid(new Date()));             // Output: true
// console.log(isValid(new Date('invalid')));    // Output: false

function isAfter(date1, date2) {
    return isValid(date1) && isValid(date2) && date1 > date2;
}

// // Example usage:
// console.log(isAfter(new Date('2024-01-01'), new Date('2023-01-01'))); // Output: true
// console.log(isAfter(new Date('2024-01-01'), new Date('2024-01-01'))); // Output: false

function isBefore(date1, date2) {
    return isValid(date1) && isValid(date2) && date1 < date2;
}

// // Example usage:
// console.log(isBefore(new Date('2023-01-01'), new Date('2024-01-01'))); // Output: true
// console.log(isBefore(new Date('2024-01-01'), new Date('2023-01-01'))); // Output: false

function isFuture(date) {
    const now = new Date();
    return isValid(date) && date > now;
}

// // Example usage:
// console.log(isFuture(new Date('2025-01-01'))); // Output: true
// console.log(isFuture(new Date('2020-01-01'))); // Output: false

function isPast(date) {
    const now = new Date();
    return isValid(date) && date < now;
}

// // Example usage:
// console.log(isPast(new Date('2020-01-01')));  // Output: true
// console.log(isPast(new Date('2025-01-01')));  // Output: false
