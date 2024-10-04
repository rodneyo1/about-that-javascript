function findExpression(target, current = 1, expression = '1') {
    // const add4 = 4;
    // const mul2 = 2;
  
    if (current === target) {
      return expression;
    }
  
    if (current > target) {
      return undefined;
    }
  
    // Try multiplying by 2 first
    const multiplyResult = findExpression(target, current * mul2, expression + ' *2');
    if (multiplyResult) {
      return multiplyResult;
    }
  
    // Try adding 4
    const addResult = findExpression(target, current + add4, expression + ' +4');
    return addResult;
  }
  