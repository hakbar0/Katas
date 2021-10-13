function checkExam(array1, array2) {
  const res = array1
    .map((x, i) => {
      return x === array2[i] ? 4 : array2[i] !== "" ? -1 : 0;
    })
    .reduce((a, b) => a + b, 0);
  return res > 0 ? res : 0;
}
