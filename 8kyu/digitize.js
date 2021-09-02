function digitize(array) {
  return array
    .toString()
    .split("")
    .reverse()
    .map((x) => parseInt(x));
}
