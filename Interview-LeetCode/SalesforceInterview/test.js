class JumpGame_II {
    constructor(nums) {
        this.nums = nums;
        this.jump = 0;
        this.currentEnd = 0;
        this.farthest = 0;
    }

    jumpCalculation() {
        let first = this.nums[0];
        if(first === this.nums.length - 1) {
            if(first == 0) {
                return;
            } else {
                this.jump = 1;
                return;
            }
        }
        for(let i = 0; i < this.nums.length - 1; i++) {
            this.farthest = Math.max(this.farthest, i + this.nums[i]);
            if(i >= this.currentEnd) {
                if(this.farthest <= i && this.nums[i] == 0) {
                    this.jump = -1;
                    return;
                }
                this.jump++;
                this.currentEnd = this.jump;
                if(this.currentEnd >= this.nums.length - 1) {
                    break;
                }
            }
        }
    }
}

var jump = function(nums) {
    let jumpGame = new JumpGame_II(nums);
    jumpGame.jumpCalculation();
    console.log("Result:", jumpGame.jump);  // Corrected variable name
};

// Test cases
// jump([1,0,1,0])
// jump([0]) // 0
// jump([3,2,1,0,4]);
jump([1,1,1,1]);
// Add more test cases as needed