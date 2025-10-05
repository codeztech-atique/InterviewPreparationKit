var rob = function(nums) {
  let rob1 = 0, rob2 = 0; // rob1 = dp[i-2], rob2 = dp[i-1]
  for (let n of nums) {
    let temp = Math.max(n + rob1, rob2);
    rob1 = rob2;
    rob2 = temp;
  }
  return rob2;
};

console.log(rob([1,2,3,1])); //4

