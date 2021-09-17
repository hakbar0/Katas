function shorter_reverse_longer(a, b) {
  const isAlonger = b.length <= a.length;
  return isAlonger
    ? b + a.split("").reverse().join("") + b
    : a + b.split("").reverse().join("") + a;
}
