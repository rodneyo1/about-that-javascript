function cutFirst(str){
    let result=""
    for (let i = 2; i < str.length; i++) {
       result=result+str[i]
      }
    return result
}

function cutLast(str){
    let result=""
    for (let i = 0; i < str.length-2; i++) {
       result=result+str[i]
      }
    return result
}

function cutFirstLast(str){
   let st=cutFirst(str)
    return (cutLast(st))
}

function keepFirst(str){
    if (str.length<=2){
        return str
    }  
    return str[0]+str[1]
}

function keepLast(str){
    let n=str.length
    if (str.length<=2){
        return str
    } 
    return str[n-2]+str[n-1]
}

function keepFirstLast(str){
    let n=str.length
    if (n<4){
        return str
    }
 return str[0]+str[1]+str[n-2]+str[n-1]
}
//console.log(keepFirstLast("ft"))