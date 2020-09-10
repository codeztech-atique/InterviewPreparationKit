let val=5, n=10;

function TimeComplexity_ConditionalStatement() {
    if(val>4) {
        console.log("Example 1 - Maximum Time Complexity because its repeating for 1 times: O(1)");
    } else {
        for(var i=1;i<=n;i++) {
            console.log(i);
        }
        console.log("Example 1 - Maximum Time Complexity because its repeating for N times: O(n)");
    }
    console.log("So here best case is O(1), worst case is O(n)");
}



TimeComplexity_ConditionalStatement();