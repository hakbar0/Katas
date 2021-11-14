const isMonotone = (arr) => {
  const sortArr = [...arr].sort((a, b) => {
    return a - b;
  });
  return JSON.stringify(sortArr) === JSON.stringify(arr);
};
