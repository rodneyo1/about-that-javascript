const words=(str)=>{return str.split(" ")}

const sentence=(arr)=>{
    let result=[]
    arr.forEach(array=>result.push(...(array.split(" "))))
    return result
}

const yell=(str)=>{return str.toUpperCase()}

const whisper=(str)=>{return "*"+str.toLowerCase()+"*"}

const capitalize=(str)=>{str=str.toLowerCase()
    let ch=str.charAt(0).toUpperCase()
    return ch+str.slice(1)
}
