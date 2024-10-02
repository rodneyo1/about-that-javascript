function repeat(str,num){
    res=""
while (num > 0){
     res+=str
     num--
}
return res
}

String.prototype.repeat=repeat

//console.log(String.prototype.repeat("d",5))