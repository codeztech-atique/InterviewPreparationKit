function generateBinaryStrings(n) {
  let result = [];
  let backtrack = (current) => {
    if(current.length == n) {
      result.push(current);
      return;
    }

    backtrack(current + "0");
    backtrack(current + "1");
  }
  backtrack("");
  return result;
}

function generateSubsetBacktrack(n) {
  let result = [];
  let backtrack = (index, current) => {
    if(index == n.length) {
      result.push([...current]);
      return;
    }

    backtrack(index + 1, current);
    current.push(n[index]);

    backtrack(index + 1, current);
    current.pop();
  }
  backtrack(0, []);
  return result;
}

console.log(generateSubsetBacktrack([1,2,3,4]));
console.log(generateBinaryStrings(2));
