class JumpGame_II {
    constructor(nums) {
        this.nums = nums;
        this.jumps = 0;        // Corrected variable name
        this.currentEnd = 0;
        this.farthest = 0;     // Corrected variable name
    }

    jumpCalculation() {
        let first = this.nums[0];
        if (first == this.nums.length - 1) {
            if(first == 0) {
                this.jumps = 0;
            } else {
                this.jumps = 1;    // Corrected variable name
            }
            return;
        }
        for (let i = 0; i < this.nums.length - 1; i++) {
            this.farthest = Math.max(this.farthest, i + this.nums[i]);
            if (this.farthest <= i && this.nums[i] === 0) {
                // Cannot make any further jumps, and we are not at the end
                this.jumps = -1;  // indicating it's not possible
                return;
            }
            if (i >= this.currentEnd) {
                this.jumps++;
                this.currentEnd = this.farthest;

                if (this.currentEnd >= this.nums.length - 1) {
                    break; // Reached or surpassed the last index
                }
            }
        }
    }
}

var jump = function(nums) {
    let jumpGame = new JumpGame_II(nums);
    jumpGame.jumpCalculation();
    console.log("Result:", jumpGame.jumps);  // Corrected variable name
};

// Test cases
// jump([0]) // 0
// jump([2,3,1,1,4]);
jump([1,0,1,0])
// jump([1,1,1,1]);
// Add more test cases as needed
