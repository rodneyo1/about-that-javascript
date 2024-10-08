function isFriday(date) {
    return date.getDay() === 5;  // 5 represents Friday (Sunday = 0, Monday = 1, ..., Saturday = 6)
}

function isWeekend(date) {
    const day = date.getDay();
    return day === 0 || day === 6;  // 0 = Sunday, 6 = Saturday
}

function isLeapYear(date) {
    const year = date.getFullYear();
    return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
}

function isLastDayOfMonth(date) {
    const nextDay = new Date(date);
    nextDay.setDate(date.getDate() + 1);  // Move to the next day
    return nextDay.getDate() === 1;  // If the next day is the 1st, then it's the last day of the current month
}

const date1 = new Date(2024, 1, 29);  // 29th February 2024 (Leap Year)
const date2 = new Date(2024, 1, 28);  // 28th February 2024
const date3 = new Date(2023, 9, 6);   // 6th October 2023 (Friday)

console.log(isFriday(date3));          // true
console.log(isWeekend(date3));         // false
console.log(isLeapYear(date1));        // true
console.log(isLastDayOfMonth(date1));  // true
console.log(isLastDayOfMonth(date2));  // false

