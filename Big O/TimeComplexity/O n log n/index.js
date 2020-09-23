var n = 10;

function TimeComplexity_DoubleForLoop() {
    for(var i=0;i<=n;i++) {  //This we know O(n)
        for(var j=1;j<=n;j=j*2) { // This is we know O(logN base 2) times
            console.log(i," ------> ", j); //O(logN) times
        }
    } //O(n^2)
    console.log("Example - Maximum Time Complexity : O(nlogn) times");
}