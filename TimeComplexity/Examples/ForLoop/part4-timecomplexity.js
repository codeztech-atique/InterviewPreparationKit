function TimeComplexity_DoubleForLoop() {
    for(var i=0;i<=n;i++) {  //This we know O(n)
        for(var j=1;j<=n;j=j*2) { // This is we know O(logN) times
            console.log(i," ------> ", j); //O(logN) times
        }
    }
    console.log("Example - Maximum Time Complexity : O(nlogn) times");
}

