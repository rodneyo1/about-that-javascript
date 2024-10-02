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
    ind ? ind : ind=0;
    
    for (let i = arr.length; i >= ind; i--) {
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

//console.log(lastIndexOf([0, 0, "t", "t"], "t", 3));

Array.prototype.indexOf = indexOf
Array.prototype.lastIndexOf = lastIndexOf
Array.prototype.includes = includes
