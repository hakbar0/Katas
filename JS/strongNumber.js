function strong(n) {
  const num = n
    .toString(10)
    .split("")
    .map((x) => {
      return factorial(Number(x));
    })
    .reduce((a, b) => a + b, 0);
  return num === n ? "STRONG!!!!" : "Not Strong !!";
}

function factorial(n) {
  if (n == 0 || n == 1) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
}
