function indexOf(arr, val, ind) {
  ind ? ind : ind=0;
  
  for (let i = ind; i < arr.length; i++) {
    if (arr[i] == val) {
      return i;
    }
  }
  return -1;
}

function lastindexOf(arr, val, ind) {
    ind ? ind : ind=0;
    
    for (let i = arr.length; i > ind; i--) {
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

console.log(lastindexOf([2, 3, 5, 8, 5, 7], 5));
Array.prototype.indexOf = indexOf
Array.prototype.lastIndexOf = lastindexOf
Array.prototype.includes = includes
