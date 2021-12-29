export const isSquare = (n: number) => {
  const sqrt = Math.sqrt(n);
  return Math.floor(sqrt) * Math.floor(sqrt) === n;
};
