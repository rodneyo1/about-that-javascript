function firstDayWeek(week, year) {
  let time = new Date(year);
  if (week === 1) {
    time.setHours(24);
    return formattedDate(time);
  }
  let dayPlus = week * 7 * 24;
  time.setHours(dayPlus - 123);
  // console.log(time)
  function getWeekDay(date) {
    let days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    return days[date.getDay() - 1];
  }
  function formattedDate(d) {
    let month = String(d.getMonth() + 1);
    let day = String(d.getDate() - 1);
    let year = String(d.getFullYear());

    if (month.length < 2) month = "0" + month;
    if (day.length < 2) day = "0" + day;
    if (year.length === 1) year = "000" + year;
    if (year.length === 2) year = "00" + year;
    if (year.length === 3) year = "0" + year;

    return `${day}-${month}-${year}`;
  }
  for (let i = 0; i < 7; i++) {
    let today = getWeekDay(time);
    if (today === "Monday") {
      let res = formattedDate(time);
      return res;
    }
    time.setHours(-24);
  }
  return time;
}

// Example usage:
console.log(firstDayWeek(2, "0001")); // Expected output: '08-01-0001'
console.log(firstDayWeek(52, "1000")); // Expected output: '22-12-1000'
console.log(firstDayWeek(1, "1000")); // Expected output: '01-01-1000'
console.log(firstDayWeek(2, "1000")); // Expected output: '08-01-1000'
console.log(firstDayWeek(3, "1000")); // Expected output: '15-01-1000'
console.log(firstDayWeek(1, "2023")); // Expected output: '02-01-2023'
console.log(firstDayWeek(54, "2024")); // Expected output: 'Invalid week number'
