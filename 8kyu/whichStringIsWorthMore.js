function highestValue(a, b) {
  const sumA = a
    .split("")
    .map((x) => x.charCodeAt(0))
    .reduce((a, b) => a + b);

  const sumB = b
    .split("")
    .map((x) => x.charCodeAt(0))
    .reduce((a, b) => a + b);

  return sumA >= sumB ? a : b;
}
