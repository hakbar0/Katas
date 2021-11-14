const number = (array) => {
  if (array.length === 0) return [];
  return array.map((x, i) => `${i + 1}: ${x}`);
};
