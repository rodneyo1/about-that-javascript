function indexOf(arr, val, ind) {
  ind ? ind : ind=0;
  
  for (let i = ind; i < arr.length; i++) {
    if (arr[i] == val) {
      return i;
    }
  }
  return -1;
}

function lastIndexOf(arr, val, ind) {
    let end=arr.length
    ind ? end=ind : end=arr.length;
    
    for (let i = end; i >= 0; i--) {
      if (arr[i] == val) {
        return i;
      }
    }
    return -1;
  }

  function includes(arr, val, ind) {
    ind ? ind : ind=0;
    for (let i = ind; i < arr.length; i++) {
      if( arr[i] == val){
        return true
      }
    }
    return false
  }

console.log(lastIndexOf([0, 0, "t", "t"], "t", 3));
console.log(lastIndexOf(["t", 0, 0, "t"], "t", 2));

Array.prototype.indexOf = indexOf
Array.prototype.lastIndexOf = lastIndexOf
Array.prototype.includes = includes
