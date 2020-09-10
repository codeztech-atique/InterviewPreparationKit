//GCD and LCM 
let m=72, n=120;
let first = m, second=n;
function GCD_LCM_WhileLoop() {
    while(m!=n) {
        if(m>n) {
            m = m - n;
        } else {
            n = n - m;
        }
    }
    console.log("GCD:", m);
    console.log("LCM:", (first*second)/m);
    console.log("Example 1 : Minimum time complexity 2 and Maximum time complexity --> O(n)");
}


function GCD_LCM_ForLoop() {
    for(;m!=n;) {
        if(m>n) {
            m = m - n;
        } else {
            n = n - m;
        }
    }
    console.log("GCD:", m);
    console.log("LCM:", (first*second)/m);
    console.log("Example 2 : Minimum time complexity 2 and Maximum time complexity --> O(n)");
}

GCD_LCM_WhileLoop();
GCD_LCM_ForLoop();