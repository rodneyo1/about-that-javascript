function slice(arr,start,end){
    let n=arr.length
    end? end:end=n
    if (start<0){
        start+=n
    }
    if (end<0){
        end+=n
    }
    let resultslice=[]
    let resultString=""

    if (start>n || end>n || start<0 || end<0 ){
        return null
    }
    for (let i = start; i < end; i++) {
        if (Array.isArray(arr)){
        resultslice.push(arr[i])
        } else if (typeof(arr)==="string"){
        resultString=resultString+arr[i]
        }
      }
    if (Array.isArray(arr)){
        return resultslice
    }
    return resultString
}

console.log(slice([3,45,54,4,4], 2))