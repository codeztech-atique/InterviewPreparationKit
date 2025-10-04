// 56. Merge Intervals
// https://leetcode.com/problems/merge-intervals/description/

// Given an array of intervals where intervals[i] = [starti, endi], merge all overlapping intervals, and return an array of the non-overlapping intervals that cover all the intervals in the input.

 

// Example 1:

// Input: intervals = [[1,3],[2,6],[8,10],[15,18]]
// Output: [[1,6],[8,10],[15,18]]
// Explanation: Since intervals [1,3] and [2,6] overlap, merge them into [1,6].
// Example 2:

// Input: intervals = [[1,4],[4,5]]
// Output: [[1,5]]
// Explanation: Intervals [1,4] and [4,5] are considered overlapping.
// Example 3:

// Input: intervals = [[4,7],[1,4]]
// Output: [[1,7]]
// Explanation: Intervals [1,4] and [4,7] are considered overlapping.



/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */

var mergeIntervals = function(intervals) {
    if(!intervals || intervals.length == 0) return [];
    intervals = intervals.sort((a, b) => a - b);

    let current = intervals[0];
    let result = [];

    for(let i = 1; i < intervals.length; i++) {
        let next = intervals[i];
        if(current[1] >= next[0]) {
            current[1] = Math.max(current[1], next[1]);
        } else {
            result.push(current);
            current = next;
        }
    }
    result.push(current);
    console.log(result);
}



mergeIntervals([[1,3],[2,6],[8,10],[15,18]]); // [[1,6],[8,10],[15,18]]
mergeIntervals([[1,4],[4,5]]);  // [[1,5]]
mergeIntervals( [[4,7],[1,4]]); // [[1,7]]
mergeIntervals([[5,6],[1,3],[2,4]]) // [[1,4],[5,6]]
mergeIntervals([[1,100],[2,3],[50,70],[90,95]]); //[1,100]]