function adder(numbers ,init=0) {
    return init + numbers.reduce((sum, num) => sum + num, 0) 
}

console.log(adder([1, 2, 3, 4]))
console.log((adder([9, 24, 7, 11, 3], 10)))

function sumOrMul(numbers, initialValue = 0) {
    return numbers.reduce((acc, num) => {
        if (num % 2 === 0) {
            return acc * num   
        } else {
            return acc + num  
        }
    }, initialValue) 
}

console.log(sumOrMul([1, 2, 3, 5, 8], 5))  

function funcExec(functions, initialValue) {
    return functions.reduce((acc, fn) => fn(acc), initialValue) 
}

// Example functions
const add2 = x => x + 2 
const multiplyBy3 = x => x * 3 
const subtract5 = x => x - 5 

console.log(funcExec([add2, multiplyBy3, subtract5], 5))  // Output: 16
