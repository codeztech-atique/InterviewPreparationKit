/*

https://leetcode.com/problems/find-the-highest-altitude/description/?envType=study-plan-v2&envId=leetcode-75

*/

var largestAltitude = function(gain) {
    let maxHeight = 0;
    let total = 0;
    for(let i = 0; i < gain.length; i++) {
       total += gain[i];
       maxHeight = Math.max(maxHeight, total);
    }
    console.log("Maximum:", maxHeight);
};

largestAltitude([-5,1,5,0,-7]); // 1
largestAltitude([-4,-3,-2,-1,4,3,2]); //0