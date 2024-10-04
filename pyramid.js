function pyramid(ch, num) {
  let s = "";
  let spaces = " ".repeat(ch.length);
  for (var i = 1; i <= num; i++) {
      s = s + spaces.repeat(num - i) + ch.repeat(2 * i - 1) + "\n";
  }
  return s.slice(0, -1);
}

console.log(pyramid('*', 5));
