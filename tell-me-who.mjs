#!/usr/bin/env node

import fs from 'fs/promises';
import path from 'path';

const main = async () => {
  const dirPath = process.argv[2] || process.cwd(); // Use provided argument or current directory

  try {
    // Read the directory entries
    const entries = await fs.readdir(dirPath);

    // Process guest names
    const guests = await Promise.all(
      entries
        .filter(entry => entry.endsWith('.json')) // Filter only JSON files
        .map(async (entry) => {
          const names = entry.split('_'); // Split on underscore
          const lastname = names[1].split('.json')[0]; // Get last name, removing .json
          const firstname = names[0]; // First name
          return { lastname, firstname };
        })
    );

    // Sort guests by last name and then by first name
    guests.sort((a, b) => {
      if (a.lastname === b.lastname) {
        return a.firstname.localeCompare(b.firstname);
      }
      return a.lastname.localeCompare(b.lastname);
    });

    // Print the guests in the desired format
    guests.forEach((guest, index) => {
      console.log(`${index + 1}. ${guest.lastname} ${guest.firstname}`);
    });
  } catch (err) {
    console.error("Error reading directory:", err.message);
  }
};

// Execute
main();
