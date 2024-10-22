#!/usr/bin/env node

import fs from 'fs/promises';
import path from 'path';

const main = async () => {
  const dirPath = process.argv[2] || process.cwd();

  try {
    // Read the directory entries
    const entries = await fs.readdir(dirPath);

    // Process guest names
    const guests = await Promise.all(
      entries
        .filter(entry => entry.endsWith('.json')) // Filter only JSON files
        .map(async (entry) => {
          const filePath = path.join(dirPath, entry); // Ensure correct file path
          const contents = await fs.readFile(filePath, { encoding: 'utf8' });
          const guest = JSON.parse(contents); // Parse the JSON content

          // Check if the response is 'yes'
          if (guest.answer === 'yes') {
            const names = entry.split('_'); // Split on underscore
            const lastname = names[1].split('.json')[0]; // Get last name, removing .json
            const firstname = names[0]; // First name
            return { lastname, firstname };
          }
          return null; // Return null for non-yes responses
        })
    );

    // Filter out null values and sort guests
    const filteredGuests = guests.filter(guest => guest !== null);
    filteredGuests.sort((a, b) => {
      if (a.lastname === b.lastname) {
        return a.firstname.localeCompare(b.firstname);
      }
      return a.lastname.localeCompare(b.lastname);
    });

    // Create the VIP list in the desired format
    const output = filteredGuests.map((guest, index) => `${index + 1}. ${guest.lastname} ${guest.firstname}`).join('\n');

    // Save the VIP list to vip.txt
   
    await fs.writeFile( 'vip.txt', output);

    // Print the guests in the desired format
    console.log("Vip.txt created successfully");
  } catch (err) {
    console.error("Error reading directory:", err.message);
  }
};

// Execute
main();
