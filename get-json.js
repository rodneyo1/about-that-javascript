const getJSON = async (path, params = {}) => {
  
    const url = new URL(path);
    Object.keys(params).forEach(key => url.searchParams.append(key, params[key]));
  
    // Fetch the data
    const response = await fetch(url);
  
    
    if (!response.ok) {
      throw new Error(response.statusText);
    }
  
    // Parse the JSON response
    const jsonData = await response.json();
  

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