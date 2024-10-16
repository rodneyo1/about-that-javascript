function neuron(data) {
    const result = { questions: {}, orders: {} };
  
    data.forEach(item => {
      const [categoryPart, responsePart] = item.split(' - Response: ');
      const [categoryType, content] = categoryPart.split(': ');
  
      const key = content.toLowerCase().replace(/[^\w\s]/g, '').replace(/\s+/g, '_');
      const response = responsePart.trim();
  
      if (categoryType.toLowerCase() === 'questions') {
        // If it's a question, group under 'questions'
        if (!result.questions[key]) {
          result.questions[key] = { question: content, responses: [] };
        }
        result.questions[key].responses.push(response);
      } else if (categoryType.toLowerCase() === 'orders') {
        // If it's an order, group under 'orders'
        if (!result.orders[key]) {
          result.orders[key] = { order: content, responses: [] };
        }
        result.orders[key].responses.push(response);
      }
    });
  
    return result;
  }
  
//   // Example usage:
//   const ex = [
//     'Questions: what is ounces? - Response: Ounce, unit of weight in the avoirdupois system',
//     'Questions: what is ounces? - Response: equal to 1/16 pound (437 1/2 grains)',
//     'Questions: what is Mud dauber - Response: Mud dauber is a name commonly applied to a number of wasps',
//     'Orders: shutdown! - Response: Yes Sr!',
//     'Orders: Quote something! - Response: Pursue what catches your heart, not what catches your eyes.'
//   ];
  
//   console.log(neuron(ex));
  