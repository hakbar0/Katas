const findOdd = (A) => {
  const count = {};
  A.forEach((x) => {
    count[x] = (count[x] || 0) + 1;
  });
  const arr = Object.entries(count).filter(([key, value]) => value % 2 !== 0);
  return Number(arr[0][0]);
};
