// https://leetcode.com/problems/two-sum/description/

var twoSum = function(nums, target) {
    let mapStore = new Map();
    for(let i = 0; i < nums.length; i++) {
        let findTarget = target - nums[i];
        if(mapStore.has(findTarget)) {
            return [i, mapStore.get(findTarget)]
        } else {
            mapStore.set(nums[i], i)
        }
    }
}

console.log(twoSum([2,7,11,15], 9));
console.log(twoSum([3,2,4], 6));