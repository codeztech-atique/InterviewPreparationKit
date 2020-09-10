let n=10;


// Order of N Formula
for(var i=0;i<n;i++) {}      // Time Complexity -- > O(n)
for(var i=n;i>1;i--) {}      // Time Complexity -- > O(n)
for(var i=0;i<n;i=i+2) {}    // Time Complexity -- > O(n) <-- n/2 also the same value bacause we know the degree of the polynomial is n
for(var i=0;i<n;i=i+200) {}  // Time Complexity -- > O(n) <-- n/20 also the same value bacause we know the degree of the polynomial is n