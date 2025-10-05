const rob = (nums) => {
    if(nums.length == 1) return nums[0];

    const robLine = (arr) => {
        let rob1 = 0, rob2 = 0;
        for(n of arr) {
            let temp = Math.max(n + rob1, rob2);
            rob1 = rob2;
            rob2 = temp;
        }
        return rob2;
    }

    return Math.max(robLine(nums.slice(1)), robLine(nums.slice(0, -1)));
}

console.log(rob([2,3,2])); //3