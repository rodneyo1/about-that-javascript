/**
 * Executes an array of async functions in series and returns their results in order
 * @param {Array<Function>} funcs - Array of async functions to execute
 * @returns {Promise<Array>} Array of results in the same order as input functions
 * @throws {Error} If any function throws, the error is propagated
 */
async function series(funcs) {
    const results = [];
    
    for (const func of funcs) {
        const result = await func();
        results.push(result);
    }
    
    return results;
}

// // Example usage:
// async function example() {
//     const funcs = [
//         async () => {
//             await new Promise(resolve => setTimeout(resolve, 1000));
//             return 1;
//         },
//         async () => {
//             await new Promise(resolve => setTimeout(resolve, 500));
//             return 2;
//         },
//         async () => {
//             throw new Error('Something went wrong');
//         }
//     ];

//     const results = await series(funcs);
//     console.log(results); // [1, 2, Error: Something went wrong]
// }