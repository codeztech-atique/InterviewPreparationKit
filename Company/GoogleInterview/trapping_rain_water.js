// Trapping Rain Water

// https://leetcode.com/problems/trapping-rain-water/

// Youtube Video Explanation - https://youtu.be/UZG3-vZlFM4

// Input: height = [0,1,0,2,1,0,1,3,2,1,2,1]
// Output: 6

// Solution 
// Fill Left Array
// Fill Right Array


const trappingRainWater = (arr) => {
    let leftArr = [], rightArr = [], resArr = [], res = 0;
    let largest = arr[0];
    leftArr.push(arr[0]);
    rightArr.unshift(arr[arr.length - 1]);
   
    // Fill Left Array
    for(let i = 1; i < arr.length; i++) {
        if(largest <= arr[i]) {
            largest = arr[i];
            leftArr.push(largest);
        } else if(largest >= arr[i]) {
            leftArr.push(largest);
        }
    }

    largest = arr[arr.length-1];
    // Fill Right Array
    for(let i = arr.length - 1; i >=0; i--) {
        if(largest <= arr[i]) {
            largest = arr[i];
            rightArr.unshift(largest);
        } else if(largest >= arr[i]) {
            rightArr.unshift(largest);
        }
    }

    // Calculation
    for(let i = 0; i < arr.length; i++) {
        let min = (Math.min(leftArr[i], rightArr[i])) - arr[i];
        if(min > 0) {
            resArr.push(min);
        }
    }
    
    console.log("Actual Arr : "+ arr);
    console.log("Left Arr :", leftArr);
    console.log("Right Arr:", rightArr);
    console.log("Result:"+resArr);

    for(let i = 0; i < resArr.length; i++) {
        res += resArr[i];
    }
    return res;
}

const arr = [0,1,0,2,1,0,1,3,2,1,2,1];
// const arr = [0]
// const arr = [4, 2, 0, 3, 2, 4, 3, 4];

// const arr = [3,1,2,4,0,1,3,2];
//    Left  [3,3,3,4,4,4,4,4]
//    Right [4,4,4,4,3,3,3,2]
console.log(trappingRainWater(arr));