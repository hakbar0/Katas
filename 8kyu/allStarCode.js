function addArrays(arr1, arr2) {
  if (arr1.length !== arr2.length) throw "Error";
  let sum = arr1.map(function (x, i) {
    return x + arr2[i];
  });
  return sum;
}
