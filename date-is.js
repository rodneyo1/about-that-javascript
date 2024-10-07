function isValid(date) {
    return !isNaN(date.getTime());
  }
  
  function isAfter(date1, date2) {
    return date1.getTime() > date2.getTime();
  }
  
  function isBefore(date1, date2) {
    return date1.getTime() < date2.getTime();
  }
  
  function isFuture(date) {
    return isValid(date) && isAfter(date, new Date());
  }
  
  function isPast(date) {
    return isValid(date) && isBefore(date, new Date());
  }