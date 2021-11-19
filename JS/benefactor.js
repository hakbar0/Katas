const newAvg = (arr, newavg) => {
  const sum = arr.reduce((a, b) => a + b, 0);
  const avg = Math.ceil(newavg * (arr.length + 1) - sum);
  if (avg > 0) return avg;
  throw "";
};
