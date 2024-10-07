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

    // Fill the first week in the weeks array
    let currentDay = 1; // Start from the 1st day of the year
    for (let i = startDay; i < 7; i++) {
        if (currentDay <= totalDaysInYear) {
            weeks[0][i] = String(currentDay).padStart(2, '0'); // Fill with the day
            currentDay++;
        }
    }

    // Fill the subsequent weeks
    for (let weekIndex = 1; weekIndex < weeks.length; weekIndex++) {
        for (let dayIndex = 0; dayIndex < 7; dayIndex++) {
            if (currentDay <= totalDaysInYear) {
                weeks[weekIndex][dayIndex] = String(currentDay).padStart(2, '0'); // Fill with the day
                currentDay++;
            } else {
                weeks[weekIndex][dayIndex] = "-"; // Mark days that are not part of the year
            }
        }
    }

    // Find the first day of the specified week (weekNumber - 1)
    const firstWeek = weeks[weekNumber - 1];
    const firstDay = firstWeek.find(day => day !== "-");

    // If no valid day is found, return January 1st in the correct format
    if (!firstDay) {
        return firstDayOfYear.toLocaleDateString('en-GB'); // Format as dd-mm-yyyy
    }

    // Format the date as dd-mm-yyyy
    const dayOfMonth = parseInt(firstDay, 10);
    const month = new Date(year, 0, dayOfMonth).getMonth() + 1; // Months are 0-indexed
    const formattedDate = `${String(dayOfMonth).padStart(2, '0')}-${String(month).padStart(2, '0')}-${year}`;

    return formattedDate;
}

// Example usage:
console.log(firstDayWeek(1, '2024')); 
console.log(firstDayWeek(2, '2024')); 
console.log(firstDayWeek(3, '2024')); 
console.log(firstDayWeek(53, '2024')); 
console.log(firstDayWeek(1, '2023')); 
console.log(firstDayWeek(54, '2024')); // Output: 'Invalid week number'
