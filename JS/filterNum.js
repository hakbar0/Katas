const FilterString = (value) => {
  const numStr = value
    .split("")
    .filter((x) => !isNaN(x))
    .join("");
  return Number(numStr);
};
