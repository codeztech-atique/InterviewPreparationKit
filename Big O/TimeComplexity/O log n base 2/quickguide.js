let n=10;

// Order of LogN Formula
for(var i=0;i<n;i=i*2) {}    // Time Complexity -- > O(log n base 2)
for(var i=0;i<n;i=i*3) {}    // Time Complexity -- > O(log n base 3)
for(var i=n;i>1;i=i/2) {}    // Time Complexity -- > O(log n base 2)
for(var i=n;i>1;i=i/3) {}    // Time Complexity -- > O(log n base 3)

for(var i=n;i>1;i=i/4) {}    // Time Complexity -- > O(log n base 4)
for(var i=n;i>1;i=i/5) {}    // Time Complexity -- > O(log n base 5)