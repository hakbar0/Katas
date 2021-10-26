function narcissistic(value) {
  const str = value.toString();
  const len = str.length;
  const sum = str
    .split("")
    .map((x) => Number(x) ** len)
    .reduce((a, b) => a + b);
  return sum === value ? true : false;
}
