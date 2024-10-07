function firstDayWeek(weekNumber, year) {
    // Ensure weekNumber is valid
    if (weekNumber < 1 || weekNumber > 53) {
        return 'Invalid week number';
    }

    // Create a 2D array for the weeks of the year
    const weeks = Array.from({ length: 53 }, () => Array(7).fill("-"));

    // Create a date for January 1st of the specified year
    const firstDayOfYear = new Date(year, 0, 1);
    
    // Get the day of the week for January 1st (0 = Sunday, 1 = Monday, ..., 6 = Saturday)
    const startDay = firstDayOfYear.getDay(); // 0-6
    const totalDaysInYear = new Date(year, 11, 31).getDate(); // Total days in the year

    // Initialize current day to fill weeks
    let currentDay = 1; // Start from the 1st day of the year

    // Fill the weeks array
    for (let weekIndex = 0; weekIndex < weeks.length; weekIndex++) {
        for (let dayIndex = 0; dayIndex < 7; dayIndex++) {
            // Skip to the correct index for the first week
            if (weekIndex === 0 && dayIndex < startDay) {
                weeks[weekIndex][dayIndex] = "-"; // Fill with "-"
            } else {
                if (currentDay <= totalDaysInYear) {
                    weeks[weekIndex][dayIndex] = String(currentDay).padStart(2, '0'); // Fill with the day
                    currentDay++;
                } else {
                    weeks[weekIndex][dayIndex] = "-"; // Mark days that are not part of the year
                }
            }
        }
    }

    // Find the first day of the specified week (weekNumber - 1)
    const firstWeek = weeks[weekNumber - 1];
    const firstDay = firstWeek.find(day => day !== "-");

    // If no valid day is found, return the first day of the year in the correct format
    if (!firstDay) {
        return firstDayOfYear.toLocaleDateString('en-GB'); // Format as dd-mm-yyyy
    }

    // Format the date as dd-mm-yyyy
    const dayOfMonth = parseInt(firstDay, 10);
    const dateForFormatting = new Date(year, 0, dayOfMonth);
    const formattedDate = `${String(dayOfMonth).padStart(2, '0')}-${String(dateForFormatting.getMonth() + 1).padStart(2, '0')}-${year}`;

    return formattedDate;
}

// Example usage:
console.log(firstDayWeek(52, '1000')); // Output should be '01-01-1000'
console.log(firstDayWeek(1, '1000')); // Output should be '08-01-1000'
console.log(firstDayWeek(3, '1000')); // Output should be '15-01-1000'
console.log(firstDayWeek(53, '1000')); // Output: Depending on the year structure
console.log(firstDayWeek(1, '2023')); // Output: '02-01-2023'
console.log(firstDayWeek(54, '2024')); // Output: 'Invalid week number'
