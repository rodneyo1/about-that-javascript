function reverse(arr) {
    let n = arr.length - 1;
    let res = [];
    for (let i = n; i >= 0; i--) {
      res.push(arr[i]);
    }
    return res;
  }
//Array.prototype.reverse = reverse
// let a=[1, 2, 3]
// console.log(a.reverse())
// console.log(reverse(a))
