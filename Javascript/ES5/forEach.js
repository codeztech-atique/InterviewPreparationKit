function TestForEach(data) {
   var bool = false;
   var result = data.forEach((p) => {
     if(p === 'Orange123') {
       console.log('I am here!!');
       bool = true;
     }
   });
   return bool;
}

var fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log(TestForEach(fruits));