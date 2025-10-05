var twoSum = (nums, target) => {
    let hashMap = new Map();
    for(let i = 0; i < nums.length; i++) {
        let findTarget = target - nums[i];
        if(hashMap.has(findTarget)) {
            return [i, hashMap.get(findTarget)];
        } else {
            hashMap.set(nums[i], i);
        }
    }
    return -1;
}

var threeSum = (nums) => {
    nums = nums.sort((a, b) => a - b);
    let result = [];

    for(let a = 0; a < nums.length; a++) {
        if(a > 0 && nums[a] == nums[a - 1]) continue;

        let i = a + 1;
        let j = nums.length - 1;

        while(i < j) {
            if((nums[a] + nums[i] + nums[j]) < 0) {
                i++;
            } else if((nums[a] + nums[i] + nums[j]) > 0) {
                j--;
            } else {
                result.push([nums[a], nums[i], nums[j]]);
                i++;
                j--;

                while(i < j && nums[i] == nums[i - 1]) i++;
            }
        }
    }

    return result;
}

var fourSum = (nums, target) => {
    nums = nums.sort((a, b) => a - b);
    let result = [];

    for(let a = 0; a < nums.length; a++) {
        if(a > 0 && nums[a] == nums[a - 1]) continue;

        for(let b = a + 1; b < nums.length; b++) {
            if(b > a + 1 && nums[b] == nums[b - 1]) continue;
            let i = b + 1;
            let j = nums.length - 1;

            while(i < j) {
                if((nums[a] + nums[b] + nums[i] + nums[j]) < 0) {
                    i++;
                } else if((nums[a] + nums[b] + nums[i] + nums[j]) > 0) {
                    j--;
                } else {
                    result.push([nums[a], nums[b], nums[i], nums[j]]);
                    i++;
                    j--;

                    while(i < j && nums[i] == nums[i - 1]) i++;
                    while(i < j && nums[j] == nums[j + 1]) j--;
                }
            }
        }
    }

    return result;
}


console.log(twoSum([2,7,11,15], 9));
console.log(twoSum([3,2,4], 6));

console.log(threeSum([-1,0,1,2,-1,-4])); // Output: [[-1,-1,2],[-1,0,1]]))
console.log(threeSum([0,1,1])); // Output: []

// ✅ Test Cases
console.log(fourSum([1,0,-1,0,-2,2], 0)); 
// Expected: [[-2,-1,1,2], [-2,0,0,2], [-1,0,0,1]]

console.log(fourSum([2,2,2,2,2], 8)); 
// Expected: [[2,2,2,2]]


