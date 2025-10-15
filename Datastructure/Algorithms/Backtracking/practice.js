function generateBinaryStrings(n) {
    const result = [];
    let backtrack = (current) => {
        if(current.length == n) {
            result.push(current);
            return;
        }

        backtrack(current + "0");
        backtrack(current + "1");
    }

    backtrack("");
    return result;
}

function generateSubsetBacktrack(n) {
    let result = [];
    let backtrack = (index, current) => {
        if(index == n.length) {
            result.push([...current]);
            return;
        }

        backtrack(index + 1, current);
        current.push(n[index]);

        backtrack(index + 1, current);
        current.pop();
    }

    backtrack(0, []);
    return result;
}

function combinationSum(arr, target) {
    let result = [];
    let backtrack = (index, current, remains) => {
        if(remains == 0) {
            result.push([...current]);
            return;
        }
        if(remains < 0 || index == arr.length) return;

        backtrack(index + 1, current, remains);
        current.push(arr[index]);

        backtrack(index, current, remains - arr[index]);
        current.pop();
    }
    backtrack(0, [], target);
    return result;
}

function permuteSwap(nums) {
    let result = [];
    let backtrack = (index) => {
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

console.log(generateSubsetBacktrack([1,2,3,4]));
console.log(generateBinaryStrings(2));
console.log(combinationSum([2,3,6,7], 7)); // [[7],[2,2,3]]
console.log(permuteSwap([1,2,3]));