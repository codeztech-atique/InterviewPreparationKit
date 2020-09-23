let n = 10;

function TimeComplexity_SingleForLoop_Multiply() {
    for(var i=1;i<=n;i=i*2) {
        console.log(i);
    }
    console.log("Example 1 - Maximum Time Complexity log n mean it will give decimal, float value: O(log n base 2)");
}

function TimeComplexity_SingleForLoop_Divided() {
    for(var i=n;i>=1;i=i/2) {
        console.log(i);
    }
    console.log("Example 2 - Maximum Time Complexity log n mean it will give decimal, float value: O(log n base 2)");
}

let i=1, m  =10;

//While Loop
function TimeComplexity_WhileLoop() { 
    while(i<m) {
        console.log(i); // This will take n time
        i=i*2; //this will take logn time
    }
    console.log("Example 2 - Maximum Time Complexity because its repeating for LogN times: O(Log n base 2)");
}

//While Loop
function TimeComplexity_WhileLoop() { 
    while(i>1) {
        console.log(i); // This will take n time
        i=i/2; //this will take logn time
    }
    console.log("Example 3 - Maximum Time Complexity because its repeating for LogN times: O(Log n base 2)");
}