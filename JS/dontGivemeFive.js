const dontGiveMeFive = (start, end) => {
  const diff = Math.abs(end - start) + 1;
  let arr = Array.from(Array(diff)).map((x, i) => (i + start).toString());
  return arr.filter((x) => !x.includes("5")).length;
};
