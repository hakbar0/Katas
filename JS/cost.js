const cost = (mins, res = 0) => {
  if (mins > 65) res = Math.ceil((mins - 65) / 30) * 10;
  return res + 30;
};
