function primeNumberFromArray(data) {
   var primeNums = data.filter((number) => {
       if(number==1 || number==2) {
           return true;
       }
       for(var i=2;i<=Math.sqrt(number);i++) {
           if(number%i===0) {
               return false;
           }
       }
       return true;
   })
   return primeNums;
}

function primeNumberSingleDigit(data) {
    if(data==1||data==2) {
        return true;
    } else if(data>2) {
        for(var x=2;x<data;x++) {
            if(data%x===0) {
                return false;
            }
        }
        return true;
    }
 }
 


var arr = [1,2,4,7,11,12,15,17,19,21,27,1];
console.log("Prime Numbers from array are:", primeNumberFromArray(arr));
console.log("Is Prime Numbers :", primeNumberSingleDigit(21));