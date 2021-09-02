function smallestProduct(arr, min = []) {
  arr.forEach((el) => {
    min.push(el.reduce((a, b) => a * b, 1));
  });
  return Math.min(...min);
}
