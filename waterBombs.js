const waterbombs = (fire, w) => {
  return fire
    .split("Y")
    .map((x) => Math.ceil(x.length / w))
    .reduce((a, b) => a + b, 0);
};
