function squareSum(numbers, sum = 0) {
  numbers.forEach((num) => {
    sum += num * num;
  });
  return sum;
}
