const getJSON = async (path, params = {}) => {
    // Construct the URL
    let url = path;
  
    // Add query parameters
    if (Object.keys(params).length > 0) {
      const queryString = Object.entries(params)
        .map(([key, value]) => `${encodeURIComponent(key)}=${encodeURIComponent(value)}`)
        .join('&');
      url += (url.includes('?') ? '&' : '?') + queryString;
    }
  
    // Fetch the data
    const response = await fetch(url);
  
    // Check if the response is OK
    if (!response.ok) {
      throw new Error(response.statusText);
    }
  
    // Parse the JSON response
    const jsonData = await response.json();
  
    // Check for error or return data
    if (jsonData.error) {
      throw new Error(jsonData.error);
    } else if (jsonData.data !== undefined) {
      return jsonData.data;
    } else {
      throw new Error('Invalid response format');
    }
  };
//   // Example usage
// getJSON('https://api.example.com/data', { id: 123, type: 'user' })
// .then(data => console.log(data))
// .catch(error => console.error(error));