/*

https://leetcode.com/problems/top-k-frequent-elements/

Top K Frequent Elements

Given an integer array nums and an integer k, return the k most frequent elements. You may return the answer in any order.

 

Example 1:

Input: nums = [1,1,1,2,2,3], k = 2
Output: [1,2]
Example 2:

Input: nums = [1], k = 1
Output: [1]

*/

class TopFrequent {
    constructor(nums, k) {
        this.nums = nums;
        this.limit = k;
    }

    getFrequentNumbers() {
        let obj = {};
        let result = [];
        this.nums.forEach((s1) => {
            obj[s1] = (obj[s1] || 0 ) + 1
        });
        
        // Sort object - 
        // Step 1: Get entries
        const entries = Object.entries(obj);

        // Step 2: Sort entries based on values
        entries.sort((a, b) => b[1] - a[1]);

        // Step 3: Extract sorted keys
        // Step 3: Create an array of objects with sorted keys and values
        
        console.log("Entries:", entries);

        for(let i = 0; i < entries.length; i++) {
            if(result.length < this.limit) {
                let elements = parseInt(entries[i][0]);
                result.push(elements);
            }
        }

        return result;
    }
}

var topKFrequent = function(nums, k) {
    let sortArr = nums.sort((a, b) => a - b);
    console.log("Sort Arr:", sortArr)
    let topKFreq = new TopFrequent(sortArr, k);
    console.log(topKFreq.getFrequentNumbers());
};

topKFrequent([5,2,5,3,5,3,1,1,3], 2);