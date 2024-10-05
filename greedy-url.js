function getURL(dataSet) {
    return dataSet.match(/\bhttps?:\/\/[^\s]+/g) || [];
  }
  
  function greedyQuery(dataSet) {
    return getURL(dataSet).filter(url => (url.match(/\?/g) && url.split('?')[1].split('&').length >= 3));
  }
  
  function notSoGreedy(dataSet) {
    return getURL(dataSet).filter(url => {
      const queryParams = url.split('?')[1]?.split('&').length;
      return queryParams >= 2 && queryParams <= 3;
    });
  }
  
//   // Example dataSet:
//   const dataSet = "qqq http:// qqqq q qqqqq https://something.com/hello qqqqqqq qhttp://example.com/hello?you=something&something=you&extra=1&another=2";
  
//   // Test the functions:
//   console.log(getURL(dataSet));
//   // Output: ['https://something.com/hello', 'http://example.com/hello?you=something&something=you&extra=1&another=2']
  
//   console.log(greedyQuery(dataSet));
//   // Output: ['http://example.com/hello?you=something&something=you&extra=1&another=2']
  
//   console.log(notSoGreedy(dataSet));
//   // Output: []
  