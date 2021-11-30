const cake = (x, y) => {
  const asci = y.split("").reduce((a, b, i) => {
    let c = b.codePointAt(0);

    if (i % 2 !== 0) c -= 96;
    return a + c;
  }, 0);

  return asci > x * 0.7 ? "Fire!" : "That was close!";
};
