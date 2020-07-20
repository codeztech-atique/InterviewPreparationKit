let n = 10;
function TimeComplexity_ForLoop() { 
    for(var i=1;i<=n;i++) { //Example 1 O(n)
        console.log(i);
    }
    for(var i=1;i<=n;i++) { //Example 2 O(n)
        console.log(i);
    }
    console.log("Example 1 - Maximum Time Complexity because its repeating for N times: O(n)");
    console.log("Example 2 - Maximum Time Complexity because its repeating for N times: O(n)");
    console.log("Example 3 - Maximum If we combine first 2 forloop time complexity is n+n = 2n its not n square, so again it is: O(n)");
}
TimeComplexity_ForLoop();