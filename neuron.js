const neuron = (inputs) => {
    if (inputs.length === 0) return {};
  
    const result = {
      questions: {},
      orders: {}
    };
  
    inputs.forEach(input => {
      const [category, content] = input.split(': ');
      const [query, response] = content.split(' - Response: ');
  
      const lowercaseQuery = query.toLowerCase();
      const key = lowercaseQuery
        .replace(/[^a-z0-9]+/g, '_')
        .replace(/^_|_$/g, '');
  
      if (category === 'Questions') {
        if (!result.questions[key]) {
          result.questions[key] = {
            question: query,
            responses: []
          };
        }
        result.questions[key].responses.push(response);
      } else if (category === 'Orders') {
        if (!result.orders[key]) {
          result.orders[key] = {
            order: query,
            responses: []
          };
        }
        result.orders[key].responses.push(response);
      }
    });
  
    // Remove empty categories
    if (Object.keys(result.questions).length === 0) delete result.questions;
    if (Object.keys(result.orders).length === 0) delete result.orders;
  
    return result;
  };
  
//   // Example usage
//   const exampleInput = [
//     'Questions: what is ounces? - Response: Ounce, unit of weight in the avoirdupois system',
//     'Questions: what is ounces? - Response: equal to 1/16 pound (437 1/2 grains)',
//     'Questions: what is Mud dauber - Response: Mud dauber is a name commonly applied to a number of wasps',
//     'Orders: shutdown! - Response: Yes Sr!',
//     'Orders: Quote something! - Response: Pursue what catches your heart, not what catches your eyes.'
//   ];
  
//   console.log(JSON.stringify(neuron(exampleInput), null, 2));
//   console.log(JSON.stringify(neuron([]), null, 2));