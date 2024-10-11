// harder-bigger-bolder-stronger.js
export function generateLetters() {
  let possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'; // Possible characters
  const container = document.createElement('div'); // Create a container for the letters
  
  for (let i = 0; i < 120; i++) { // Adjust loop to start from 0 for easier calculations
    let char = possible.charAt(Math.floor(Math.random() * possible.length)); // Random letter
    let elem = document.createElement('div'); // Create a new div for each letter
    
    elem.innerHTML = char; // Set the inner HTML to the random character

    // Calculate font-size from 11 to 130 pixels
    const fontSize = 11 + (i * (130 - 11) / 119);
    elem.style.fontSize = fontSize + 'px'; // Set font-size

    // Set font-weight based on the range
    if (i < 40) {
      elem.style.fontWeight = '300'; // First third
    } else if (i < 80) {
      elem.style.fontWeight = '400'; // Second third
    } else {
      elem.style.fontWeight = '600'; // Last third
    }
    
    container.appendChild(elem); // Append each letter div to the container
  }

  document.body.appendChild(container); // Append the container to the body

  // Log the number of letter divs created
  console.log(`Number of letter divs created: ${container.children.length}`); // Should log 120
}
