var findMinMaxIterative = function(nums) {
    let min = nums[0], max = nums[0];
    for (let n of nums) {
        if (n < min) min = n;
        if (n > max) max = n;
    }
    return [min, max];
};

// Example
console.log(findMinMaxIterative([2, 5, 1, 8, -3, 7])); // [-3, 8]


var findMinMaxRecursion = function(nums, i = 0, min = Infinity, max = -Infinity) {
    // Base case: reached end of array
    if (i === nums.length) return [min, max];

    // Update min and max
    if (nums[i] < min) min = nums[i];
    if (nums[i] > max) max = nums[i];

    // Recursive call for next element
    return findMinMaxRecursion(nums, i + 1, min, max);
};

// Example
console.log(findMinMaxRecursion([2, 5, 1, 8, -3, 7])); // [-3, 8]
