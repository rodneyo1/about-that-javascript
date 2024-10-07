function addWeek(date) {
    // Epoch is '0001-01-01', which is a Monday
    const epoch = new Date('0001-01-01');
    
    // Calculate the difference in days between the given date and the epoch
    const msPerDay = 24 * 60 * 60 * 1000;
    const dayDiff = Math.floor((date - epoch) / msPerDay);
    
    const weekDay = dayDiff % 14;
  
    const daysOfWeek = [
      'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday',
      'secondMonday', 'secondTuesday', 'secondWednesday', 'secondThursday', 'secondFriday', 
      'secondSaturday', 'secondSunday'
    ];

    return daysOfWeek[weekDay];
  }
  
//   // Test cases
//   console.log(addWeek(new Date('0001-01-01'))); // Monday
//   console.log(addWeek(new Date('0001-01-08'))); // secondMonday
//   console.log(addWeek(new Date('0001-01-09'))); // secondTuesday
  
function timeTravel({ date, hour, minute, second }) {
    const newDate = new Date(date);  // Clone the input date to avoid mutation
    
    newDate.setHours(hour, minute, second);
    
    return newDate;
  }
  
  // Test case
  console.log(timeTravel({
    date: new Date('2020-05-29 23:25:22'),
    hour: 21,
    minute: 22,
    second: 22
  }).toString());  // Fri May 29 2020 21:22:22
  
  console.log(new Date().toDateString())