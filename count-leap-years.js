function countLeapYears(date) {
    const year = date.getFullYear();

    // Helper function to check if a year is a leap year
    function isLeapYear(y) {
        return (y % 4 === 0 && y % 100 !== 0) || (y % 400 === 0);
    }

    let leapYearCount = 0;
    for (let i = 1; i < year; i++) {
        if (isLeapYear(i)) {
            leapYearCount++;
        }
    }

    return leapYearCount;
}

console.log(countLeapYears(new Date('2024-10-08'))); // Should return the number of leap years since year 1 up to 2024
console.log(countLeapYears(new Date('2000-01-01'))); // Should return the number of leap years since year 1 up to 2000
