const groupArrayElements = (arr, divider) => {
  // Finds length to
  const avgLen = Math.round(arr.length / divider);
  let groupArr = new Array(divider).fill(0);

  return groupArr.map((x, i) => {
    const min = i * avgLen;
    const max = i * avgLen + avgLen;
    return arr.slice(min, max);
  });
};

console.log(groupArrayElements([1, 2], 3));
