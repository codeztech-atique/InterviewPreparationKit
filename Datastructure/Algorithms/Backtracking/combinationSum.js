// Combination sum to reuse the same value;
// https://leetcode.com/problems/combination-sum
// https://leetcode.com/problems/combination-sum-ii

function combinationSum(nums, target) {
  nums.sort((a, b) => a - b);       // sort is optional here
  const result = [];

  function backtrack(index, current, remain) {
    if (remain === 0) { result.push([...current]); return; }
    if (remain < 0 || index === nums.length) return;

    // EXCLUDE current number -> move to next index
    backtrack(index + 1, current, remain);

    // INCLUDE current number -> keep index (allow reuse)
    current.push(nums[index]);
    backtrack(index, current, remain - nums[index]); // index stays the same
    current.pop();
  }

  backtrack(0, [], target);
  return result;
}

// Example
console.log(combinationSum([2,3,6,7], 7)); // [[7],[2,2,3]]

