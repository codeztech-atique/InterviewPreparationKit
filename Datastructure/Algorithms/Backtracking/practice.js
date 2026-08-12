const generateBinaryStrings = (nums) => {
    let result = [];

    const backtrack = (current) => {
        if(current.length == nums) {
            result.push(current);
            return;
        }

        backtrack(current + "0");
        backtrack(current + "1");
    }

    backtrack("");
    return result;
}

// function generateSubsetBacktrack(nums) {
//     let result = [];

//     let backtrack = (index, current) => {
//         if(index == nums.length) {
//             result.push([...current]);
//             return;
//         }

//         backtrack(index + 1, current);
//         current.push(nums[index]);

//         backtrack(index + 1, current);
//         current.pop();
//     }

//     backtrack(0, []);
//     return result;
// }

// function combinationSum(nums, remain) {
//     let result = [];
//     let backtrack = (index, current, remain) => {
//         if(remain == 0) { result.push([...current]); return }
//         if(remain < 0 || index == nums.length) return;

//         backtrack(index + 1, current, remain);
//         current.push(nums[index]);

//         backtrack(index, current, remain - nums[index]);
//         current.pop();
//     }

//     backtrack(0, [], remain);
//     return result;
// }

// function permuteSwap(nums) {
//     let result = [];
//     let backtrack = (index) => {
//         if(index == nums.length) {
//             result.push([...nums]);
//             return;
//         }

//         for(let i = index; i < nums.length; i++) {
//             [nums[index], nums[i]] = [nums[i], nums[index]];
//             backtrack(index + 1);
//             [nums[index], nums[i]] = [nums[i], nums[index]];
//         }
//     }

//     backtrack(0);

//     return result;
// }


console.log(generateBinaryStrings(2));
// console.log(generateSubsetBacktrack([1,2,3,4]));
// console.log(combinationSum([2,3,6,7], 7)); // [[7],[2,2,3]]

// console.log(permuteSwap([1,2,3]));
// console.log(permuteSwap([3, 2, 1]));