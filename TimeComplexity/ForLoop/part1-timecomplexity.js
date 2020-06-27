let n = 10;
function TimeComplexity_SingleForLoopPlusPlus() { 
    for(var i=1;i<=n;i++) {
        console.log(i);
    }
    console.log("Example 1 - Maximum Time Complexity because its repeating for N times: O(n)");
}

function TimeComplexity_SingleForLoopMinusMinus() { 
    for(var i=n;i>=1;i--) {
        console.log(i);
    }
    console.log("Example 2 - Maximum Time Complexity because its repeating for N times: O(n)");
}


function TimeComplexity_SingleForLoop_Multiply() {
    for(var i=1;i<=n;i=i*2) {
        console.log(i);
    }
    console.log("Example 3 - Maximum Time Complexity log n mean it will give decimal, float value: O(log n base 2)");
}

function TimeComplexity_SingleForLoop_Divided() {
    for(var i=n;i>=1;i=i/2) {
        console.log(i);
    }
    console.log("Example 4 - Maximum Time Complexity log n mean it will give decimal, float value: O(log n base 2)");
}

function TimeComplexity_SingleForLoop_RootNTimes() {
    for(var i=1;i*i<n;i++) {
        console.log(i);
    }
    console.log("Example 5 - Maximum Time Complexity root N times: O(√n)");
    //Explanation - 
    //  i*i < n (Contidition is given in the program)
    //  i*i >= n (The condition will terminated if its greater than or equal to n)
    //  i square 2 >= n (Because i*i = i square 2)
    //  i >= √n (Because we know if we send square 2 opposite side its √n)

    //  So the complexity is O(√n)
}

function TimeComplexity_DoubleForLoop() {
    for(var i=1;i<=n;i++) {
        for(var j=1;j<=n;j++) {
            console.log(i," ------> ", j);
        }
    }
    console.log("Example 6 - Time Complexity its repeating for N2 times: O(N2) -- N Square");
}


TimeComplexity_SingleForLoopPlusPlus(); //Applicable to increment or decrement increment or decrement the i value
TimeComplexity_SingleForLoopMinusMinus(); //Applicable to increment or decrement increment or decrement the i value
// TimeComplexity_DoubleForLoop(); //Applicable to increment or decrement increment or decrement increment or decrement the i value
// TimeComplexity_SingleForLoop_Multiply(); //Applicable to Multiple the i value
// TimeComplexity_SingleForLoop_Divided(); //Applicable to Divided the i value
// TimeComplexity_SingleForLoop_RootNTimes(); //Root N times

