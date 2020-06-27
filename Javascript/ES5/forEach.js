function TestForEach(data) {
   data.forEach((p, cnt) => {
     console.log(p, cnt);
   })
}

var fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log(TestForEach(fruits));