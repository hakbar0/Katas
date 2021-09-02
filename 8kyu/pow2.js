function powersOfTwo(n, out = []) {
  for (let i = 0; i <= n; i++) {
    out.push(Math.pow(2, i));
  }
  return out;
}
