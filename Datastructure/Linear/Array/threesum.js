var threeSum = function(nums) {
    nums = nums.sort((a, b) => a - b);
    console.log("Sort:", nums);
    let result = [];
    for(let a = 0; a < nums.length; a++) {
        if(a > 0 && nums[a] == nums[a - 1]) {
            continue;
        }
        console.log("Picking:", nums[a], nums[a - 1])
        let i = a + 1;
        let j = nums.length - 1;
       
        while(i < j) {
            if((nums[a] + nums[i] + nums[j]) > 0) {
                j--;
            } else if((nums[a] + nums[i] + nums[j]) < 0) {
                i++;
            } else {
                // console.log(nums[a], nums[i], nums[j]);
                result.push([nums[a], nums[i], nums[j]]);
                i++;
                j--;

                while(i < j && nums[i] == nums[ i - 1]) i++;
            }
        }
    }
    return result;
};

console.log(threeSum([2,-3,0,-2,-5,-5,-4,1,2,-2,2,0,2,-4,5,5,-10])); // [[-1,-1,2],[-1,0,1]]