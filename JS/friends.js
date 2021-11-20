const friends = (n) => {
  return n <= 2 ? 0 : 1 + friends(n / 2);
};
