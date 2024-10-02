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
    
    if (start>n || end>n || start<0 || end<0 ){
        return null
    }
    for (let i = start; i < end; i++) {
        resultslice.push(arr[i])
      }

    return resultslice
}

console.log(slice([3,2,4,5,6,4,2,4,5,4,],-78,7))