function multipleOfIndex(array, output = []) {
  for (let i = 0; i < array.length; i++) {
    if (Number.isInteger(array[i] / i)) output.push(array[i]);
  }
  return output;
}

// better solution

function multipleOfIndex(array) {
  return array.filter((num, index) => num % index === 0);
}
