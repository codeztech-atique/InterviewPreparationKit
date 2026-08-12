var uniqueCount = ["a","b","c","d","d","e","a","b","c","f","g","h","h","h","e","a"];

let obj = {};
const findRepeating = (uniqueCount) => {
    uniqueCount.forEach((e) => {
        obj[e] = (obj[e] || 0 ) + 1
    }); 

    obj = Object.fromEntries(
        Object.entries(obj).sort((a, b) => b[1] - a[1])
    );
}
findRepeating(uniqueCount)
console.log(obj)
