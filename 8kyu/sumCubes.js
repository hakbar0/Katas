function sumCubes(n) {
  let sum = 0,
    i = 1;

  while (i <= n) {
    sum += Math.pow(i, 3);
    i++;
  }

  return sum;
}
