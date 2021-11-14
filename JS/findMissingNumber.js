function missingNo(nums) {
  const sorted = nums.sort((a, b) => a - b);
  const filtered = sorted.filter((el, i) => sorted[i + 1] - el === 2);
  return filtered.length > 0 ? filtered[0] + 1 : 0;
}
