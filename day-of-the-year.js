function dayOfTheYear(date) {
    const year = date.getFullYear();
    const startOfYear = new Date(year, 0, 1);
 
    const diffInMilliseconds = date - startOfYear;
    
    const daysSinceStart = Math.floor(diffInMilliseconds / (1000 * 60 * 60 * 24));
    
    return daysSinceStart + 1; // Add 1 to include the current day
}

// Example usage:
console.log(dayOfTheYear(new Date('2024-01-01'))); // Output: 1
console.log(dayOfTheYear(new Date('2024-05-30'))); // Output: 151
console.log(dayOfTheYear(new Date('2020-12-31'))); // Output: 366 (leap year)
console.log(dayOfTheYear(new Date('2023-10-08'))); // Output: 281
