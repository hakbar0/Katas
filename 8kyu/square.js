var isSquare = function (n) {
  const sqrt = Math.sqrt(n);
  return Math.floor(sqrt) * Math.floor(sqrt) === n;
};
