// return the missing number!
function findNumber(array) {
  const sum = array.reduce((a, b) => a + b, 0);
  const length = array.length + 1;
  let total = 0;
  for (let i = 1; i <= length; i++) {
    total += i;
  }
  return total - sum;
}
