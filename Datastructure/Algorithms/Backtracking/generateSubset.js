function subsets(nums) {
  const result = [];

  function backtrack(index, current) {
    console.log("ENTER  index:", index, " current:", current);

    if (index === nums.length) {
      result.push([...current]);
      console.log("BASE   index:", index, " saved:", current, " → return to caller");
      return;
    }

    console.log("EXCL → call backtrack(", index + 1, ")");
    backtrack(index + 1, current);   // goes down to index+1; returns here

    current.push(nums[index]);
    console.log("INCL  push", nums[index], " index still:", index, " current:", current);

    console.log("INCL → call backtrack(", index + 1, ")");
    backtrack(index + 1, current);   // goes down again; returns here
    current.pop();

    console.log("RETURN index:", index, " after both branches");
  }

  backtrack(0, []);
  return result;
}

console.log(subsets([10, 1, 2, 7, 6]));
