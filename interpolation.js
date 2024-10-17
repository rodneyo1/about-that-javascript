function interpolation({ step, start, end, callback, duration }) {
    const stepSize = (end - start) / step;
    const delayBetweenSteps = duration / step;
  
    function executeStep(currentStep) {
      if (currentStep >= step) return; // Stop when we reach the number of steps
  
      const distance = start + stepSize * currentStep;
      const point = (duration / step) * currentStep;
      
      // Call the callback with the current interpolated point
      callback([distance, point]);
  
      // next step
      setTimeout(() => executeStep(currentStep + 1), delayBetweenSteps);
    }
  
    // Start interpolation
    executeStep(0);
  }