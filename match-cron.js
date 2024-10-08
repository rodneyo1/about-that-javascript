function matchCron(cronPattern, date) {
    const [minutePattern, hourPattern, dayOfMonthPattern, monthPattern, dayOfWeekPattern] = cronPattern.split(' ');

    const minute = date.getMinutes();
    const hour = date.getHours();
    const dayOfMonth = date.getDate();
    const month = date.getMonth() + 1;  // getMonth() returns 0-based index, so add 1
    const dayOfWeek = date.getDay();    // getDay() returns 0 for Sunday, 1 for Monday, etc.

    // Helper function to match individual time components
    function matchPart(pattern, value) {
        return pattern === '*' || parseInt(pattern, 10) === value;
    }

    // Check all parts of the cron pattern
    const minuteMatch = matchPart(minutePattern, minute);
    const hourMatch = matchPart(hourPattern, hour);
    const dayOfMonthMatch = matchPart(dayOfMonthPattern, dayOfMonth);
    const monthMatch = matchPart(monthPattern, month);
    const dayOfWeekMatch = matchPart(dayOfWeekPattern === '7' ? '0' : dayOfWeekPattern, dayOfWeek); // Treat Sunday as 7 or 0

    return minuteMatch && hourMatch && dayOfMonthMatch && monthMatch && dayOfWeekMatch;
}

// console.log(matchCron('9 * * * *', new Date('2020-05-30 18:09:00')));  // true
// console.log(matchCron('9 * * * *', new Date('2020-05-30 19:09:00')));  // true
// console.log(matchCron('9 * * * *', new Date('2020-05-30 19:21:00')));  // false
// console.log(matchCron('9 19 30 5 6', new Date('2020-05-30 19:09:00')));  // true
// console.log(matchCron('9 19 30 5 7', new Date('2020-05-30 19:09:00')));  // false
