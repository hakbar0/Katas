/*

Given an array of integers.

Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers.

If the input array is empty or null, return an empty array.

*/

function countPositivesSumNegatives(input = []) {
  if (!input || input.length === 0) return [];

  let pos = input.filter(function (num) {
    return num > 0;
  });
  let neg = input.filter(function (num) {
    return num < 0;
  });
  let count = pos.length;

  const reducer = (accumulator, currentValue) => accumulator + currentValue;
  let sum = neg.reduce(reducer);

  return [count, sum];
}
