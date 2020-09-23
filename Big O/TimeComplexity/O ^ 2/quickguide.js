var n = 10;
const abc = [1,2,3,4,5];

// For Loop
for(var i=0;i<n;i++) {
   for(var j=0;j<n;j++) {
       
   }
}

for(var i=n;i>=0;i--) {
    for(var j=n;j>=0;j--) {
        
    }
}

// ForEach Loop
function logPair(abc) {
    abc.forEach(element1 => {
        abc.forEach(element2 => {
            console.log(element1, element2)
        });
    });
}

// var abc123 = Math.pow(5, 100000);
// console.log(abc123);

// Output - Infinity