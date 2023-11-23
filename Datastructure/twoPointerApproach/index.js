function findPairWithSum(sortedArray, targetSum) {
  let left = 0; // Initialize left pointer
  let right = sortedArray.length - 1; // Initialize right pointer

  while (left < right) {
    const currentSum = sortedArray[left] + sortedArray[right];

    if (currentSum === targetSum) {
      // Found a pair with the target sum
      return [sortedArray[left], sortedArray[right]];
    } else if (currentSum < targetSum) {
      // Move the left pointer to the right
      left++;
    } else {
      // Move the right pointer to the left
      right--;
    }
  }

  // If no pair is found, return null or an appropriate message
  return null;
}

// Example usage
const sortedArray = [2, 3, 4];
const targetSum = 6;
const result = findPairWithSum(sortedArray, targetSum);

if (result) {
  console.log(`Pair with sum ${targetSum}: [${result[0]}, ${result[1]}]`);
} else {
  console.log('No pair found with the target sum.');
}
