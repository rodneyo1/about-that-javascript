
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
// // Example dataSet
// const dataSet = "qqq http:// qqqq q qqqqq https://something.com/hello qqqqqqq qhttp://example.com/hello?you=something&something=you";

// console.log("getURL:", getURL(dataSet));
// console.log("greedyQuery:", greedyQuery(dataSet));
// console.log("notSoGreedy:", notSoGreedy(dataSet));
