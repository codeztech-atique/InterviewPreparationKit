const findPairWithSum = (arr, targetSum) => {
   let left = 0;
   let right = arr.length - 1;
   while(left < right) {
      let total = arr[left] + arr[right];
      if(total < targetSum) {
         left++;
      } else if(total > targetSum) {
         right--;
      } else {
         return [arr[left], arr[right]];
      }
   }
}

const sortArray = (a, b) => {
    return a-b;
}


// Example usage
const arr = [2, 4, 3, 1, 5];
const targetSum = 7;
const sortedArray = arr.sort(sortArray);
console.log("Sort Array:", sortedArray)
const result = findPairWithSum(sortedArray, targetSum);

if (result) {
  console.log(`Pair with sum ${targetSum}: [${result[0]}, ${result[1]}]`);
} else {
  console.log('No pair found with the target sum.');
}
