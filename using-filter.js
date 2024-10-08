function filterShortStateName(stringsarray){
    return stringsarray.filter(str=>str.length<7)
}
//console.log(filterShortStateName(["dsd","seven","seventy","eighty","thirtytwo"]))

function filterStartVowel(stringsarray){
    return stringsarray.filter(str=>str.match(/^[aeiou]/i))
}

//console.log(filterStartVowel(["apple","goat","uodf"]))

function filter5Vowels(stringsarray){
    return stringsarray.filter(str=>function containsAllCharacters(str) {
        for (let char of "aeiou") {
            if (!str.includes(char)) {
                return false;
            }
        }
        return true;
    }(str))
}
//console.log(filter5Vowels(["a,i,e,o,u","rt","a,e"]))

function filter1DistinctVowel(arr) {
    return arr.filter(word => {
        let vowels = word.toLowerCase().match(/[aeiou]/g);
        if (!vowels) return false;
        let distinctVowels = new Set(vowels);
        return distinctVowels.size === 1;
    });
}

// // Example usage:
// let words = ["Alabama", "Hello", "Moon", "Sky", "Eerie"];
// console.log(filter1DistinctVowel(words))

function multiFilter(objects) {
    return objects.filter(obj => {
        const hasLongCapital = obj.capital && obj.capital.length >= 8;

        const doesNotStartWithVowel = !/^[aeiou]/i.test(obj.name);

        // Check if 'tag' contains at least one vowel
        const hasVowelInTag = /[aeiou]/i.test(obj.tag);

        const isNotSouthRegion = obj.region !== "South";

        return hasLongCapital && doesNotStartWithVowel && hasVowelInTag && isNotSouthRegion;
    });
}

// const data = [
//     { name: 'Alaska', capital: 'Juneau', tag: 'cold', region: 'West' },
//     { name: 'Florida', capital: 'Tallahassee', tag: 'hot', region: 'South' },
//     { name: 'California', capital: 'Sacramento', tag: 'cool', region: 'West' },
//     { name: 'Texas', capital: 'Austin', tag: 'hot', region: 'Southwest' }
// ];

// console.log(multiFilter(data))