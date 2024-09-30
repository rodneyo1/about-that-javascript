const isPositive=(num)=>{
    return num>0 
}

function abs( num ){
   if (num ==0) {
    return 0
   }
    return num>0 ? num : -num;
}
console.log(abs(0))