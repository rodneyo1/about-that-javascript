const words=(str)=>{return str.split(" ")}
const sentence=(arr)=>{
    let result=[]
    arr.forEach(array=>result.push(...(array.split(" "))))
    return result
}
