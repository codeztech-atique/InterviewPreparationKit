function primeNumber(data) {
   if(data == 1 || data == 0 ) {
       return true;
   } 
   for(var i=2;i<=data;i++) {
       if(data%i===0) {
           return false;
       }
       return true;
   }
}
function primeNumberUsingFilter(res) {
    var result = res.filter(data=> {
        if(data==0 || data==1) {
            return true;
        } else {
            for(var i=2;i<=Math.sqrt(data);i++) {
                if(data%i===0) {
                    return false;
                }
            }
            return true;
        }
    })
    return result
}
var arr = [1,2,4,7,11,12,15,17,19,21,27,1];
console.log("Is Prime - ", primeNumber(6));
console.log("Prime numbers are - ", primeNumberUsingFilter(arr));

