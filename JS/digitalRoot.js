function digital_root(n) {
  return findRoot(n);
}

const findRoot = (n) => {
  n = n.toString();
  if (n.length > 1) {
    const sum = n.split("").reduce((a, b) => a + Number(b), 0);
    return findRoot(sum);
  }
  return Number(n);
};
