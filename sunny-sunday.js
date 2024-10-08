function sunnySunday(date) {
    // Verify date
    date = new Date(date);
 
    const weekdays = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    
    // Calculate the number of days since 01/01/0001 (which is a Monday)
    const startDate = new Date('0001-01-01');
    const daysSinceStart = Math.floor((date - startDate) / (24 * 60 * 60 * 1000));
    
    // Adjust for the 6-day week by removing Sundays
    const adjustedDays = daysSinceStart - Math.floor((daysSinceStart + 1) / 7);
    
    // Get the weekday
    return weekdays[adjustedDays % 6];
}

console.log(sunnySunday(new Date('0001-01-01')));  // Monday
console.log(sunnySunday(new Date('0001-01-02')));  // Tuesday
console.log(sunnySunday(new Date('0001-02-07')));  // Wednesday
console.log(sunnySunday(new Date('2023-05-17')));  // Wednesday
console.log(sunnySunday(new Date('2024-10-08')));  // Tuesday
console.log(sunnySunday(new Date('0001-12-01')));  // Friday
