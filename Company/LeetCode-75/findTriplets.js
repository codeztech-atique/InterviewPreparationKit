
var increasingTriplet = function(nums) {
    let flag = false;
    for(let i = 0; i < nums.length; i++) {
        let start = i + 1, end = nums.length - 1;
        while (start < end) {
            console.log(nums[i], nums[start], nums[end]);
            if(nums[i] < nums[start] && nums[start] < nums[end]) {
                flag = true;
                break;
            }
            if(start == (end - 1)) {
                start++;
                end = nums.length - 1;
            } else {
                end--;
            }
        }

        if(flag) {
            break;
        }
    }
    console.log("Flag:", flag);
};

increasingTriplet([1,6,2,5,1]);
// increasingTriplet([1,2,3,4,5])
// increasingTriplet([1,5,0,4,1,3])
// increasingTriplet([4,5,2147483647,1,2])
