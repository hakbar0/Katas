function median(array) {
  const isEven = array.length % 2 === 0;
  const midpoint = Math.ceil(array.length / 2) - 1;
  array.sort((a, b) => a - b);
  return isEven ? (array[midpoint] + array[midpoint + 1]) / 2 : array[midpoint];
}
