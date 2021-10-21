function onesCounter(input) {
  return input
    .join("")
    .split("0")
    .filter(Number)
    .map((el) => el.length);
}
