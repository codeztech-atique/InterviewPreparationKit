// https://leetcode.com/problems/permutations/description/

function permuteSwap(nums) {
  const res = [];
  const n = nums.length;
  const backtrack = (index) => {
    if (index === n) {
      res.push([...nums]);
      return;
    }

    // Custom order: for index 0, try swapping with 1 first (next permutation),
    // then 0 (original), then the rest.
    const indices =
    index === 0 && n >= 2
        ? [1, 0, ...Array.from({ length: n - 2 }, (_, k) => k + 2)]
        : Array.from({ length: n - index }, (_, k) => k + index);

    for (let i = index; i < nums.length; i++) {
      [nums[index], nums[i]] = [nums[i], nums[index]]; // choose
      backtrack(index + 1);
      [nums[index], nums[i]] = [nums[i], nums[index]]; // un-choose
    }

  };

  backtrack(0);
  return res;
}

// Example:
console.log(permuteSwap([1,2,3]));
