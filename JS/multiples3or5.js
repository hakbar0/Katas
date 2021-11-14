const solution = (number) => {
  if (number <= 2) return 0;
  const numArr = [...new Array(number).keys()];
  const filter = numArr.filter((x) => x % 3 == 0 || x % 5 === 0);
  return filter.reduce((a, b) => a + b, 0);
};
