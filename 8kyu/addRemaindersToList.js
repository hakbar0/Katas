function solve(nums, div) {
  return nums.map((x) => x + (x % div));
}
