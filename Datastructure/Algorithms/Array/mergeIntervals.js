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
var merge = function(intervals) {
  if (!intervals || intervals.length === 0) return [];

  // 1) sort by start
  intervals.sort((a, b) => a[0] - b[0]);

  const res = [];
  let cur = intervals[0];

  for (let i = 1; i < intervals.length; i++) {
    const next = intervals[i];

    // overlap or touch: cur.end >= next.start
    if (cur[1] >= next[0]) {
      cur[1] = Math.max(cur[1], next[1]); // merge
    } else {
      res.push(cur);
      cur = next;
    }
  }
  res.push(cur);
  return res;
};

// quick checks
// [[1,4],[4,5]] -> [[1,5]]
// [[1,3],[4,5]] -> [[1,3],[4,5]]
// [[1,5],[3,7]] -> [[1,7]]


mergeIntervals([[1,3],[2,6],[8,10],[15,18]]); // [[1,6],[8,10],[15,18]]
mergeIntervals([[1,4],[4,5]]);  // [[1,5]]
mergeIntervals( [[4,7],[1,4]]); // [[1,7]]
mergeIntervals([[5,6],[1,3],[2,4]]) // [[1,4],[5,6]]
mergeIntervals([[1,100],[2,3],[50,70],[90,95]]); //[1,100]]