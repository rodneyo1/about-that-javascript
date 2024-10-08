function dayOfTheYear(date) {
    //veridy date
    date = new Date(date);
    
    const year = date.getFullYear();
    const month = date.getMonth();
    const day = date.getDate();

    const daysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

    // Check for leap year and update February if necessary
    if (year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0)) {
        daysInMonth[1] = 29;
    }

    // Calculate the day of the year
    let dayCount = day;
    for (let i = 0; i < month; i++) {
        dayCount += daysInMonth[i];
    }

    return dayCount;
}


// Example usage:
console.log(dayOfTheYear(new Date('2024-01-01'))); // Output: 1
console.log(dayOfTheYear(new Date('2024-05-30'))); // Output: 151
console.log(dayOfTheYear(new Date('2020-12-31'))); // Output: 366 (leap year)
console.log(dayOfTheYear(new Date('2023-10-08'))); // Output: 281
console.log(dayOfTheYear(new Date('0001-01-01')))