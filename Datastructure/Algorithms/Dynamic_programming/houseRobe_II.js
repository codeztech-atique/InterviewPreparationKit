var rob = function(nums) {
  const n = nums.length;
  if (n === 1) return nums[0];

  function robRange(lo, hi) {
    let prev2 = 0, prev1 = 0;
    for (let i = lo; i <= hi; i++) {
      const take = prev2 + nums[i];
      const skip = prev1;
      const cur = Math.max(take, skip);
      prev2 = prev1;
      prev1 = cur;
    }
    return prev1;
  }

  return Math.max(robRange(0, n - 2), robRange(1, n - 1));
};

console.log(robRange([2,3,2])) // 3