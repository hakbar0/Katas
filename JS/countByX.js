function countBy(x, n, arr = []) {
  for (let i = x; i <= x * n; i += x) {
    arr.push(i);
  }
  return arr;
}
