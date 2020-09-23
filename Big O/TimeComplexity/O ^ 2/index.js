const abc = [1,2,3,4,5];

// Using ES5 for loop
function logPair(abc) {
    for(var i=0;i<abc.length;i++) { //O(n)
        for(var j=i+1;j<abc.length;j++) { //O(n)
           console.log(abc[i], " ", abc[j]);
        }
    }
}
// O(n*n) -> O(n ^ 2)

logPair(abc);

// Using ES5 forEach
function logPair(abc) {
    abc.forEach(element1 => { // O(n)
        abc.forEach(element2 => { // O(n)
            console.log(element1, element2)
        });
    });
}
// O(n*n) -> O(n ^ 2)
console.log("This we will call Quadratic time :");
console.log("Example - Time Complexity : O(n * n) times, that mean O(n^2)  -- N Square Quadratic");
