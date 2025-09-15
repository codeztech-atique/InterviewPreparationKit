let n = 10, p=0;
function TimeComplexity_ForLoop() { 
    for(var i=1;i<=n;i=i*2) { //Example 1 --> O(log n base 2) -- > Bacause p = log n
        p++;
    }
    for(var j=1;j<=p;j=j*2) { //Example 2 --> O(log n base 2) -- > Here log p = log log n
        console.log(p);
    }
    console.log("Example 1 - Maximum Time Complexity log n mean it will give decimal, float value: O(log n base 2)");
    console.log("Example 2 - Maximum Time Complexity log n mean it will give decimal, float value: O(log n base 2)");
    console.log("Example 3 - Maximum If we combine first 2 forloop time complexity is O(log n): O(log log n base 2)");
}
TimeComplexity_ForLoop();