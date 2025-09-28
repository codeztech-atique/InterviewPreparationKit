function generateSubsetBacktrack(nums) {
    const result = [];

    const backTrack = (index, current) => {
        if(index == nums.length) {
            result.push([...current]);
            return;
        }

        backTrack(index + 1, current);
        current.push(nums[index]);

        backTrack(index + 1, current);
        current.pop();
    }
    backTrack(0, []);
    return result;
}

const generateSubset = (nums) => {
    let result = [];
    for(let i = 0; i < nums.length; i++) {
        for(let j = i + 1; j < nums.length + 1; j++) {
            result.push(nums.slice(i, j));
        }
    }
    return result;
}

console.log(generateSubsetBacktrack([1,2,3]));
console.log(generateSubset([1,2,3]));
