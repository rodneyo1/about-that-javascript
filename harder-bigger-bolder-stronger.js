const container = document.createElement('div');
container.id = 'letters-container';
document.body.appendChild(container);

export const generateLetters = () => {
  // Clear any existing content in the container
  const existingContainer = document.getElementById('letters-container');
  existingContainer.innerHTML = '';

  for (let i = 2; i <= 120; i++) {
    const letterDiv = document.createElement('div'); // Create a new div for each letter
    const randomLetter = String.fromCharCode(Math.floor(Math.random() * 26) + 65); // Generate a random uppercase letter

    // Ensure each div contains exactly one letter
    letterDiv.textContent = randomLetter.charAt(0);

    // Calculate font-size and font-weight based on the index
    const fontSize = 11 + (i * (130 - 11) / 119); // Linearly interpolate font-size from 11 to 130
    let fontWeight;

    if (i < 40) {
      fontWeight = 300; // First third
    } else if (i < 80) {
      fontWeight = 400; // Second third
    } else {
      fontWeight = 600; // Last third
    }

    // Apply styles to the letter div
    letterDiv.style.fontSize = `${fontSize}px`;
    letterDiv.style.fontWeight = fontWeight;
    letterDiv.style.textAlign = 'center'; // Center the text
    letterDiv.style.margin = '10px 0'; // Add some margin between letters

    existingContainer.appendChild(letterDiv); // Append the letter div to the container
    console.log(`Number of letter divs created: ${container.children.length}`); 
  }
};
