// Q1 Coding problem related to array.
// Finding maximum number out of minimum from buckets of k size from an unsorted array.
// e.g. Input: [1,3,4,6,2,9,8], and k = 2
// Output: 8
// Explanation:
// First, bucketize the input as per value k = 2 i.e: [1,3], [3,4], [4,6], [6,2], [2,9], [9,8]
// Second, find minimum of each bucket:
// [1,3] -> 1
// [3,4] -> 3
// [4,6] -> 4
// [6,2] -> 2
// [2,9] -> 2
// [9,8] -> 8
// Finally, return maximum of all minimums i.e. 8.

function findMaxOfMin(nums, k) {
    const n = nums.length;

    let maxOfMins = Number.MIN_SAFE_INTEGER;
    let currentMin = Number.MAX_SAFE_INTEGER;
    console.log(maxOfMins, currentMin)

    // Iterate through the array
    for (let i = 0; i < n; i++) {
        // Update current minimum
        currentMin = Math.min(currentMin, nums[i]);
        console.log("Min:", currentMin, nums[i], i, k);

        // Check if the current index is at the end of a bucket
        if (i >= k - 1) {
            // Update maxOfMins with the maximum of all current minimums
            maxOfMins = Math.max(maxOfMins, currentMin);

            // If the element at the start of the current bucket is the current minimum,
            // reset currentMin to a large value to prepare for the next bucket.
            if (nums[i - k + 1] === currentMin) {
                currentMin = Number.MAX_SAFE_INTEGER;
            }
        }
    }

    return maxOfMins;
}

// Example usage:
const inputArray = [1, 3, 4, 6, 2, 9, 8];
const k = 2;
const result = findMaxOfMin(inputArray, k);

console.log(result); // Output: 8
