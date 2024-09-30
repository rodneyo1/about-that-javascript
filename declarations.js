const escapeStr = "\`, \\, /, \"\'"
const arr=[4,'2']
const obj={
    str:"string",
    num:1,
    bool:true,
    undef:undefined
}
const nested={
    arr: [4,undefined,'2'],
    obj: {
        str:"hello",
        num:1,
        bool:true
    }
}
Object.freeze(arr)
Object.freeze(nested)
Object.freeze(obj)