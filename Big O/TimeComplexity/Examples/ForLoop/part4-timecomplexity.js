function TimeComplexity_DoubleForLoop() {
    for(var i=0;i<=n;i++) {  //This we know O(n)
        for(var j=1;j<=n;j=j*2) { // This is we know O(logN) times
            console.log(i," ------> ", j); //O(logN) times
        }
    }
    console.log("Example - Maximum Time Complexity : O(nlogn) times");
}


const abc = [1,2,3,4,5];

function logPair(abc) {
    for(var i=0;i<abc.length;i++) {
        for(var j=i+1;j<abc.length;j++) {
           console.log(abc[i], " ", abc[j]);
        }
    }
}

logPair(abc);

// Using ES5
function logPair(abc) {
    abc.forEach(element1 => {
        abc.forEach(element2 => {
            console.log(element1, element2)
        });
    });
}
console.log("This we will call Quadratic time :");
console.log("Example - Time Complexity : O(n * n) times, that mean O(n^2)");