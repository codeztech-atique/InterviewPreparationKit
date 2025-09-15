// === Subsets.js ===
// Generate subsets using bitmasking

const items = ["a", "b", "c"];

console.log("All subsets of", items, ":");

for (let mask = 0; mask < (1 << items.length); mask++) {
  let subset = [];
  for (let i = 0; i < items.length; i++) {
    if (mask & (1 << i)) subset.push(items[i]);
  }
  console.log(mask.toString(2).padStart(3, "0"), "->", subset);
}
