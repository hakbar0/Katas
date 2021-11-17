const twoSum = (nums, target) => {
  let arr = nums.slice(1);
  for (let i = 0; i < arr.length; i++) {
    if (nums[i] + arr[i] === target) {
      return [i, i + 1];
    }
    for (let j = 1; j < arr.length; j++) {
      if (nums[i] + arr[j] === target) {
        return [i, j + 1];
      }
    }
  }
};
