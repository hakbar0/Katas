function singleDigit(n) {
  while (n > 9) {
    n = parseInt(
      n
        .toString(2)
        .split("")
        .map(Number)
        .reduce((x, y) => x + y)
    );
  }
  return n;
}
