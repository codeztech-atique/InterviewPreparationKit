function nextPermutationUsingPermuteSwap(nums) {
  function permuteSwap(arr) {
    const result = [];
    const n = arr.length;

    const backtrack = (index) => {
      if (index === n) {
        result.push([...arr]);
        return;
      }
      for (let i = index; i < n; i++) {
        [arr[index], arr[i]] = [arr[i], arr[index]];
        backtrack(index + 1);
        [arr[index], arr[i]] = [arr[i], arr[index]];
      }
    };
    backtrack(0);
    return result;
  }

  // 1) Generate all permutations (with duplicates)
  const perms = permuteSwap([...nums]);

  // 2) Deduplicate
  const seen = new Set();
  const uniq = [];
  for (const p of perms) {
    const key = p.join(",");
    if (!seen.has(key)) {
      seen.add(key);
      uniq.push(p.slice());
    }
  }

  // 3) Sort lexicographically
  uniq.sort((a, b) => {
    for (let i = 0; i < a.length; i++) {
      if (a[i] !== b[i]) return a[i] - b[i];
    }
    return 0;
  });

  // 4) Find current and return next (wrap around)
  const cur = nums.join(",");
  const idx = uniq.findIndex(p => p.join(",") === cur);
  return uniq[(idx + 1) % uniq.length];
}

// Tests
console.log(nextPermutationUsingPermuteSwap([1,2,3])); // [1,3,2]
console.log(nextPermutationUsingPermuteSwap([3,2,1])); // [1,2,3]
console.log(nextPermutationUsingPermuteSwap([1,1,5])); // [1,5,1]
