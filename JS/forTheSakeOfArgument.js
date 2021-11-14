const numbers = (...num) => {
  const isNumber = (val) => typeof val === "number";
  return num.every(isNumber);
};
