function interpolation({ step, start, end, duration }) {
    return new Promise(resolve => {
      const stepSize = (end - start) / step;
      const delayBetweenSteps = duration / step;
  
      function executeStep(currentStep) {
        if (currentStep >= step) {
          resolve([[start + stepSize * (step - 1), duration]]);
          return;
        }
  
        if (currentStep === step - 1) {
          const distance = start + stepSize * currentStep;
          const point = duration;
          resolve([[distance, point]]);
          return;
        }
  
        setTimeout(() => executeStep(currentStep + 1), delayBetweenSteps);
      }
  
      executeStep(0);
    });
  }