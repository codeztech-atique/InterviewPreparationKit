var rob = function(nums) {
  if (nums.length === 1) return nums[0];

  // helper function to reuse rob1 logic
  const robLine = (arr) => {
    let rob1 = 0, rob2 = 0;
    for (let n of arr) {
      let temp = Math.max(n + rob1, rob2);
      rob1 = rob2;
      rob2 = temp;
    }
    return rob2;
  };

  // two cases: skip first OR skip last
  return Math.max(robLine(nums.slice(1)), robLine(nums.slice(0, -1)));
};

console.log(robRange([2,3,2])) // 3