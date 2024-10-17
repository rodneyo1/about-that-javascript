function interpolation(config) {
    const { step, start, end, callback, duration } = config;
    
    const intervalDuration = duration / step;
    
    const distanceIncrement = (end - start) / step;
    
    let currentStep = 0;
    
    const interpolationTimer = setInterval(() => {
      // current distance
      const currentDistance = start + (distanceIncrement * currentStep);
      
      // Calculate the current time point
      const currentTimePoint = intervalDuration * (currentStep + 1);
      
      // Call the callback with the current interpolated point
      callback([currentDistance, currentTimePoint]);
      currentStep++;
      
      // Check if we've reached the final step
      if (currentStep === step) {
        // Stop the interval if we've completed all steps
        clearInterval(interpolationTimer);
      }
    }, intervalDuration);
  }