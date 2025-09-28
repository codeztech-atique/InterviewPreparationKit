function generateBinaryStrings(n) {
    let result = [];
  
    function backtrack(current) {
      if (current.length === n) {
        result.push(current);
        return;
      }
  
      // Choice 1: Add "0"
      backtrack(current + "0");
  
      // Choice 2: Add "1"
      backtrack(current + "1");
    }
  
    backtrack("");
    return result;
  }
  
  console.log(generateBinaryStrings(2));
  