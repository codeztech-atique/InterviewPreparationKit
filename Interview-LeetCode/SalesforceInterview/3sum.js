class ThreeSum {
    constructor(nums) {
        this.nums = nums;
    }

    calculation() {
        const result = [];
        const n = this.nums.length;

        // Sort the array
        this.nums.sort((a, b) => a - b);

        for (let i = 0; i < n - 2; i++) {
            // Skip duplicates
            if (i > 0 && this.nums[i] === this.nums[i - 1]) {
                continue;
            }

            let left = i + 1;
            let right = n - 1;

            while (left < right) {
                const sum = this.nums[i] + this.nums[left] + this.nums[right];

                if (sum === 0) {
                    result.push([this.nums[i], this.nums[left], this.nums[right]]);
                    left++;

                    // Skip duplicates
                    while (left < right && this.nums[left] === this.nums[left - 1]) {
                        left++;
                    }
                } else if (sum < 0) {
                    left++;
                } else {
                    right--;
                }
            }
        }

        return result;
    }
}

var threeSum = function(nums) {
    const threeSumClass = new ThreeSum(nums);
    console.log(threeSumClass.calculation());
};

threeSum([-1, 0, 1, 2, -1, -4]); // [[-1,-1,2],[-1,0,1]]
