const arr = [2,4,1,3,10,12];

const mainFunction = (arr) => {
   //arr.shift(); // Remove the element in the beginning of the array
   arr.unshift('x'); // Insert the element in the beginning of the array
   arr.splice(3, 0, 'Sunny'); // Index 4 location of arrray and shift entire record to the right hand side
   console.log(arr);
}

mainFunction(arr);