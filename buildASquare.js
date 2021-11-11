const generateShape = (int) => {
  const str = "+".repeat(int);
  return new Array(int)
    .fill(str + "\n")
    .join("")
    .slice(0, -1);
};
