function reverse(arr) {
    let n = arr.length - 1;
    let res = ""
    Array.isArray(arr)?res=[]:res

    for (let i = n; i >= 0; i--) {

        Array.isArray(arr)?res.push(arr[i]):res+=arr[i]
      
    }
    return res;
  }
//Array.prototype.reverse = reverse
// let a=["lktr"]
// console.log(a.reverse())
// console.log(reverse(a))
