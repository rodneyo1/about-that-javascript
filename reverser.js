function reverse(arr) {
  let n = arr.length - 1;
  let res = [];
  for (let i = 0; i <= n; i++) {
    res.push(arr[i]);
  }
  return res;
}

// let a=[3,4,5,6,7,,8,9,10,11,12]
// console.log(a.reverse())
// console.log(reverse(a))
