function ionOut(str) {
    return str.match(/\b\w*tion\b/g)?.map(word => word.replace('ion', '')) || [];
  }
  
  
//   // Example usage:
//   const result = ionOut("The action and motion of the potion caused a reaction.");
//   console.log(result); // Output: ['act', 'mot', 'react']
  