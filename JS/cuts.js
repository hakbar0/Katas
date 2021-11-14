var countSquares = function (cuts) {
  return cuts <= 0 ? 1 : Math.pow(cuts, 2) * 6 + 2;
};
