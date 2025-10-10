// https://leetcode.com/problems/permutations/description/

function permuteSwap(nums) {
  const res = [];

  const backtrack = (index) => {
    if (index === nums.length) {
      res.push([...nums]);
      return;
    }
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
