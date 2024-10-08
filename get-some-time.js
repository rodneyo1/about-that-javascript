function firstDayWeek(weekNumber, year) {
    // Convert year to number
    year = parseInt(year, 10);

    // Ensure weekNumber is valid
    if (weekNumber < 1 || weekNumber > 53) {
        return 'Invalid week number';
    }

    // Find the first Thursday of the year
    let firstThursday = new Date(year, 0, 1);
    while (firstThursday.getDay() !== 4) {
        firstThursday.setDate(firstThursday.getDate() + 1);
    }

    // Calculate the date of the Monday of week 1
    let weekOne = new Date(firstThursday);
    weekOne.setDate(firstThursday.getDate() - 3);

    // Calculate the date of the Monday of the requested week
    let targetDate = new Date(weekOne);
    targetDate.setDate(weekOne.getDate() + (weekNumber - 1) * 7);

    // If the target date is before January 1st, return January 1st
    if (targetDate.getFullYear() < year) {
        targetDate = new Date(year, 0, 1);
    }

    // Format the date as dd-mm-yyyy
    const day = String(targetDate.getDate()).padStart(2, '0');
    const month = String(targetDate.getMonth() + 1).padStart(2, '0');
    return `${day}-${month}-${year}`;
}
console.log(firstDayWeek(52, '1000')); // Should output '22-12-1000'
console.log(firstDayWeek(1, '1000')); // Should output '01-01-1000'
console.log(firstDayWeek(2, '1000')); // Should output '08-01-1000'
console.log(firstDayWeek(3, '1000')); // Should output '15-01-1000'
console.log(firstDayWeek(1, '2023')); // Should output '02-01-2023'
console.log(firstDayWeek(54, '2024')); // Should output 'Invalid week number'