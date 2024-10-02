const multiply=(a,b)=>{
    let res=0
    while (b > 0){
         res+=a
         b--
    }
    return res
    
}
const divide=(a,b)=>{
    //positives
    let res=0
    while (a-b >= 0){
         a-=b
         res++
    }
    return res
    
}

const modulo=(a,b)=>{ 
    //positives
    let res=0
    while (a-b >= 0){
        a-=b
        res++
   }
   return a
   
}
