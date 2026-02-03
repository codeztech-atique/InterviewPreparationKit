// https://leetcode.com/problems/jump-game/

// youtube video = https://www.youtube.com/watch?v=muDPTDrpS28


const jumpGame = (arr) => {
    let max = 0;
    for(let i = 0; i < arr.length; i++) {
        if(i > max) {
            return false;
        }  if((i + arr[i]) >= arr.length - 1) {
            return true;
        }

        max = Math.max(max, (i + arr[i]));
    }
}
// const nums = [1, 1, 1, 0]; // True
const nums = [3,2,1,0,4]; // False
// const nums = [2,3,1,1,4]; // True 
// const nums = [2,5,0,0]; // True
// const nums = [0]; // True
// const nums = [2, 0]; // True
// const nums = [1, 0, 2]; // False
// const nums = [2, 0, 0]; // True
// const nums = [2, 0, 2]; // True

console.log(jumpGame(nums))

// 3, 2, 1, 0, 4 --> Array
// 0, 1, 2, 3, 4 --> Index

// 1st Iteration ->
// i = 0
// arr[i] = 3
// Calculation - i  = i + (arr[i] - 1) = 2

// 2nd Iteration ->
// i = 2
// arr[i] = 1
// Calculation - i = i + (arr[i] - 1) X Not gonna move -> Because arr[i] == 1

// If the I value is >= arr[i].length = true
// If arr[i] = 0 and it is not the end of the array list > Break and return false
// If arr[i] = 0 and it is the end of the array list > Break and return true
// If arr[i] = 1 > then i + arr[i]
// if arr[i] > 1 > then i - arr[i]