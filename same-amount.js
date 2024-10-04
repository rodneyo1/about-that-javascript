function sameAmount(str, regex1, regex2) {
    regex1 = new RegExp(regex1, "g")
    regex2 = new RegExp(regex2, "g")
    const match1 = str.match(regex1) || []
    const match2 = str.match(regex2) || []
    return match1.length === match2.length
}

console.log(sameAmount("hello world", /l/g, /o/g))
console.log(sameAmount("ababab", /a/g, /b/g))
