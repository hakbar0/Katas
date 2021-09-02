function getAverage(marks) {
  const reducer = (acc, val) => acc + val;
  const sum = marks.reduce(reducer);
  return Math.floor(sum / marks.length);
}
