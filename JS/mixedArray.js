function sumMix(x) {
  return x.reduce(function (acc, val) {
    return acc + parseInt(val);
  }, 0);
}
