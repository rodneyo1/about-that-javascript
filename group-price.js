function groupPrice(dataSet) {
    const pricePattern = /([A-Z]{3})(\d+)\.(\d{2})/g;
    let result = [];
    let match;
  
    while ((match = pricePattern.exec(dataSet)) !== null) {
      result.push([match[0], match[2], match[3]]);
    }
  
    return result;
  }
  
  // Example usage:
  const dataSet = "The price is USD12.31, and another item costs EUR45.67.";
  console.log(groupPrice(dataSet));
  // Output: [ [ 'USD12.31', '12', '31' ], [ 'EUR45.67', '45', '67' ] ]
  