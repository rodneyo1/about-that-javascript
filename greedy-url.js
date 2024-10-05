const urlExp = /https?:\/\/(?:www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}(\.[a-zA-Z0-9()]{1,6})?(?:[-a-zA-Z0-9()\[\],@:%_\+.~#?&\/=]*)/g;

function getURL(dataSet) {
  return dataSet.match(urlExp) || [];
}

function greedyQuery(dataSet) {
  return getURL(dataSet).filter((url) => {
    // Looks for at least 3 query parameters (2 & and the final one)
    return /\?([^&=]+=[^&=]*&){2,}/.test(url);
  });
}

function notSoGreedy(dataSet) {
  return getURL(dataSet).filter((url) => {
    // Looks for exactly 2 or 3 query parameters (1 or 2 & and the final one)
    return /\?([^&=]+=[^&=]*&){1,2}[^&=]+=[^&=]*$/.test(url);
  });
}

// // Example dataSet:
// const dataSet = "qqq http:// qqqq q qqqqq https://something.com/hello qqqqqqq qhttp://example.com/hello?you=something&something=you&extra=1&another=2";

// // Test the functions:
// console.log(getURL(dataSet));
// // Output: ['https://something.com/hello', 'http://example.com/hello?you=something&something=you&extra=1&another=2']

// console.log(greedyQuery(dataSet));
// // Output: ['http://example.com/hello?you=something&something=you&extra=1&another=2']

// console.log(notSoGreedy(dataSet));
// // Output: []