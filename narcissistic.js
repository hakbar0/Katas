const narcissistic = (value) => {
  const str = value.toString();
  const len = str.length;
  const sum = str.split("").reduce((a, b) => a + Number(b) ** len, 0);
  return sum === value ? true : false;
};
