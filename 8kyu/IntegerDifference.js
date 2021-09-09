const intDiff = (arr, n, count = 0) => {
  for (let i = 0; i < arr.length; i++) {
    for (let k = i + 1; k < arr.length; k++)
      if (Math.abs(arr[k] - arr[i]) === n) count++;
  }
  return count;
};
