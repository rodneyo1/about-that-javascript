"use strict";

function pronoun(str) {
    const pronouns = ['i', 'you', 'he', 'she', 'it', 'they', 'we'];
    const result = {};
    
    const words = str.toLowerCase().split(/\s+/);  // Split the string into words, ignoring case
    for (let i = 0; i < words.length; i++) {
        const word = words[i];
        if (pronouns.includes(word)) {
            // Initialize the pronoun key in the result object if it doesn't exist
            if (!result[word]) {
                result[word] = { word: [], count: 0 };
            }

            result[word].count++;  // Increment the count for the pronoun

            // Add the word after the pronoun if it exists and is not another pronoun
            if (i + 1 < words.length && !pronouns.includes(words[i + 1])) {
                result[word].word.push(words[i + 1]);
            }
        }
    }

    return result;
}

// // Example usage:
// const ex1 = 'Using Array Destructuring, you you can iterate through objects easily.';
// console.log(pronoun(ex1));
// // Output: { you: { word: [ 'can' ], count: 2 } }

// const ex2 = 'If he you want to buy something you have to pay.';
// console.log(pronoun(ex2));
// // Output: { he: { word: [], count: 1 }, you: { word: [ 'want', 'have' ], count: 2 } }
