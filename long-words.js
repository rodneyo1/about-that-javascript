//.every
const longWords=(arr)=>{
   return arr.every(str=>typeof(str)=="string" && str.length>=5)
}

// console.log(LongWords(["dsdfs","dsdf","ffdfdgdg"]))
// console.log(LongWords([1,"dsf","ffdfdgdg"]))

// //true

function oneLongWord(words) {
    return words.some(word => typeof word === 'string' && word.length >= 10);
}

// console.log(oneLongWord(["short", "tiny", "extraordinarily"]))
// console.log(oneLongWord(["small", "tiny", "short"]))
// console.log(oneLongWord([12345, "thisisalongword", null]))
// console.log(oneLongWord([12345, null, undefined]))


function noLongWords(words) {
    return words.every(word => !(typeof word === 'string' && word.length >= 7));
}

// console.log(noLongWords(["short", "tiny", "medium"]));  // Output: true
// console.log(noLongWords(["small", "tiny", "extralongword"]));  // Output: false
// console.log(noLongWords([12345, null, "sevench"]));  // Output: false
// console.log(noLongWords([12345, null, undefined]));  // Output: true
