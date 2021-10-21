function findNextSquare(sq) {
  const sqrt = Math.sqrt(sq);
  const isSq = Math.floor(sqrt) * Math.floor(sqrt) === sq;
  return isSq ? Math.pow(sqrt + 1, 2) : -1;
}
