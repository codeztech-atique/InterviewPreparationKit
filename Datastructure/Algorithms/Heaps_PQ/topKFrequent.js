// 347. Top K Frequent Elements
// https://leetcode.com/problems/top-k-frequent-elements/description/

// Given an integer array nums and an integer k, return the k most frequent elements. You may return the answer in any order.

 

// Example 1:

// Input: nums = [1,1,1,2,2,3], k = 2

// Output: [1,2]

// Example 2:

// Input: nums = [1], k = 1

// Output: [1]

// Example 3:

// Input: nums = [1,2,1,2,1,2,3,1,3,2], k = 2

// Output: [1,2]



var topKFrequent = function(nums, k) {
    var obj = {}, res = [];
    nums.filter((e) => {
        obj[e] = ( obj[e] || 0 ) + 1;
    });

    const objSort = Object.entries(obj).sort((a, b) => a[1] - b[1]).reverse();
    for(let ss of objSort) {
        if(res.length < k) {
            res.push(ss[0]);
        }
    }

    return res;
}


console.log(topKFrequent([2,3,2,2,3,1,1,1], 2)); // [2 ,1]
console.log(topKFrequent([1,1,2,2,2,3], 2)); // [2, 1]
console.log(topKFrequent([1,1,1,2,2,3], 2)); // [1,2]
console.log(topKFrequent([1,2,1,2,1,2,3,1,3,2], 2)); // [1,2]
