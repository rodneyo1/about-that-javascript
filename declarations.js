const escapeStr = "\`, \\, /, \"\'"
const arr =Object.freeze([4,'2'])
const obj=Object.freeze({
    str:"string",
    num:1,
    bool:true,
    undef:undefined
})
const nested=Object.freeze({
    arr: [4,undefined,'2'],
    obj: {
        str:"hello",
        num:1,
        bool:true
    }
})
