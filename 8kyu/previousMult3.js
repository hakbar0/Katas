const prevMultOfThree = (n) => {
  if (n % 3 === 0) return n;
  while (n.toString() > 1) {
    n = Number(n.toString().slice(0, -1));
    if (n % 3 === 0 && n >= 3) return n;
  }
  return null;
};
