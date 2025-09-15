var rob = function(nums) {
    let getMoney = 0;
    for(let i = 0; i < nums.length; i=i+2) {
        getMoney+= nums[i];
    }
    return getMoney;
};


console.log(rob([1,2,3,1]))
console.log(rob([2,7,9,3,1]))