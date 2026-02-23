
function permuteSwap(nums) {
    let result = [];
    const backtrack = (index) => {
        if(index == nums.length) {
            result.push([...nums]);
            return;
        }

        for(let i = index; i < nums.length; i++) {
            [nums[index], nums[i]] = [nums[i], nums[index]];
            backtrack(index + 1);
            [nums[index], nums[i]] = [nums[i], nums[index]];
        }
    }
    backtrack(0);
    return result;
}

console.log(permuteSwap([1,2,3]));
console.log(permuteSwap([3, 2, 1]));