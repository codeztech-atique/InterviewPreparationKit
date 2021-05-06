// Build your own Array Map Method

// Diffrance between filter and Map

const numbers = [1, -1, 2, 4];
const filtered = numbers.filter(n => n > 0);

const items1 = filtered.map(n => ({ value: n})); // Or
const items2 = filtered.map(n => { 
  return { value: n }
});

console.log("Using Filter: ",filtered);
console.log("Using Map 1: ", items1);
console.log("Using Map 2: ", items2);


Array.prototype.atMap = function(callback){
    let newArray = [];
    let x = this.length;
    for (let i = 0; i < x; i++) {
      let counter = callback(this[i]);
      newArray.push(counter);
    }
    return newArray;
}

let arr = [1, 2, 3];
arr = arr.atMap(el => el + 2);
console.log("Custom Map Function:", arr);
