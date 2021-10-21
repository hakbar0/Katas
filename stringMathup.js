function solve(a, b) {
  let count = new Array(b.length).fill(0);
  a.forEach((el) => {
    b.forEach((elb, j) => {
      if (el === elb) count[j] += 1;
    });
  });
  return count;
}
