function findDeletedNumber(arr, mixArr) {
  let diff = arr.filter((x) => !mixArr.includes(x))[0];
  return diff ? diff : 0;
}
