function getURL(dataSet) {
    // Regular expression to match http and https URLs
    const urlPattern = /https?:\/\/[^\s]+/g;
    return dataSet.match(urlPattern) || [];
}

function greedyQuery(dataSet) {
    // Regular expression to match URLs with at least 3 query parameters
    const greedyPattern = /https?:\/\/[^\s?]+\?([^&=]+=[^&=]+&){2,}[^&=]+=[^&=]+/g;
    return dataSet.match(greedyPattern) || [];
}

function notSoGreedy(dataSet) {
    // Regular expression to match URLs with at least 2 but not more than 3 query parameters
    const notSoGreedyPattern = /https?:\/\/[^\s?]+\?([^&=]+=[^&=]+&){1,2}[^&=]+=[^&=]+/g;
    return dataSet.match(notSoGreedyPattern) || [];
}

// // Example dataSet
// const dataSet = "qqq http:// qqqq q qqqqq https://something.com/hello qqqqqqq qhttp://example.com/hello?you=something&something=you";

// console.log("getURL:", getURL(dataSet));
// console.log("greedyQuery:", greedyQuery(dataSet));
// console.log("notSoGreedy:", notSoGreedy(dataSet));
