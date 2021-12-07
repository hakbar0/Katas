const printerError = (s) => {
  const alphabet = [
      "A",
      "B",
      "C",
      "D",
      "E",
      "F",
      "G",
      "H",
      "I",
      "J",
      "K",
      "L",
      "M",
    ],
    total = s.length;

  const errors = s
    .toUpperCase()
    .split("")
    .filter((x) => !alphabet.includes(x)).length;

  return `${errors}/${total}`;
};
