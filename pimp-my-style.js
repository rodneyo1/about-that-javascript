// pimp-my-style.js
export const styles = [
    'one',
    'two',
    'three',
    'four',
    'five',
    'six',
    'seven',
    'eight',
    'nine',
    'ten',
    'eleven',
    'twelve',
    'thirteen',
    'fourteen',
    'fifteen',
  ];
  
  let currentIndex = 0; // Keep track of the current index in the styles array
  
  export function pimp(event) {
    const button = event.target; // Get the button that was clicked
  
    // If we haven't reached the end of the styles array
    if (currentIndex < styles.length) {
      // Add the current style class to the button
      button.classList.add(styles[currentIndex]);
      
      // Toggle the 'unpimp' class off
      button.classList.remove('unpimp');
      
      currentIndex++;
    } else {
      // If we've reached the end, start removing styles in LIFO order
      if (currentIndex > 0) {
        // Toggle the 'unpimp' class on
        button.classList.add('unpimp');
  
        // Remove the last added style class
        currentIndex--;
        button.classList.remove(styles[currentIndex]);
        
        // Toggle the 'unpimp' class off
        button.classList.remove('unpimp');
      }
  
      // If all styles have been removed, reset the index
      if (currentIndex === 0) {
        currentIndex = 0; // Reset index to allow re-adding styles
      }
    }
  }
  