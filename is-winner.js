const isWinner = async (countryName) => {
    try {
      // Get country information
      const country = await db.getWinner(countryName);
  
      // Check if the country is from Europe
      if (country.continent !== 'Europe') {
        return `${countryName} is not what we are looking for because of the continent`;
      }
  
      // Get results for the country
      const results = await db.getResults(country.id);
  
      // Check if the country has won at least 3 times
      if (results.length < 3) {
        return `${countryName} is not what we are looking for because of the number of times it was champion`;
      }
  
      // Format years and scores
      const years = results.map(r => r.year).join(', ');
      const scores = results.map(r => r.score).join(', ');
  
      return `${countryName} won the FIFA World Cup in ${years} winning by ${scores}`;
    } catch (error) {
      if (error.message === 'Country Not Found') {
        return `${countryName} never was a winner`;
      }
      throw error; // Re-throw any other errors
    }
  };