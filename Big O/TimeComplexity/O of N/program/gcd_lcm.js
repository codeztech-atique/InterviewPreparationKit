//GCD and LCM 
let m=72, n=120;
let first = m, second=n;
function GCD_LCM_WhileLoop() {
    while(m!=n) { //O(n)
        if(m>n) { 
            m = m - n; //O(1)
        } else { 
            n = n - m; //O(1)
        }
    }
    console.log("GCD:", m); //O(1)
    console.log("LCM:", (first*second)/m); //O(1)
    console.log("Example 1 : Minimum time complexity 2 and Maximum time complexity --> O(n)"); //O(1)
}


function GCD_LCM_ForLoop() {
    for(;m!=n;) { //O(n)
        if(m>n) { 
            m = m - n; //O(1)
        } else {
            n = n - m; //O(1)
        }
    }
    console.log("GCD:", m); //O(1)
    console.log("LCM:", (first*second)/m); //O(1)
    console.log("Example 2 : Minimum time complexity 2 and Maximum time complexity --> O(n)"); //O(1)
}

GCD_LCM_WhileLoop();
GCD_LCM_ForLoop();