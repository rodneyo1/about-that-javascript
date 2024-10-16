"use strict";

function pronoun(str) {
    const regexPronoun = /\b(i|you|he|she|it|they|we)\b/gi;  // Match pronouns
    const pronounMatch = str.match(regexPronoun)?.map(x => x.toLowerCase());  // Convert pronouns to lowercase

    const words = str.split(/\s+/);  // Split the string into words, keeping punctuation

    const result = {};
    const pronouns = ["i", "you", "he", "she", "it", "they", "we"];

    for (let i = 0; i < words.length; i++) {
        const word = words[i].replace(/[^\w]/g, '').toLowerCase();  // Remove punctuation and lowercase
        if (pronouns.includes(word)) {
            // Initialize the pronoun key in the result object if it doesn't exist
            if (!result[word]) {
                result[word] = { word: [], count: 0 };
            }
            result[word].count++;  // Increment the count for the pronoun

            // Add the word after the pronoun if it exists, is not another pronoun, and does not contain punctuation
            if (i + 1 < words.length) {
                const nextWord = words[i + 1].replace(/[^\w]/g, '');  // Remove punctuation from the next word
                if (!pronouns.includes(nextWord.toLowerCase()) && nextWord !== "") {
                    result[word].word.push(nextWord);
                }
            }
        }
    }

    return result;
}

// // Example usage:
// const ex = 'I buy,\ni to,\nYOU buy,\nit have,\nIt buys,\nit is,\nyou go';
// console.log(pronoun(ex));
// // Output: { i: { word: ['buy', 'to'], count: 2 }, you: { word: ['buy', 'go'], count: 2 }, it: { word: ['have', 'buys', 'is'], count: 3 } }
