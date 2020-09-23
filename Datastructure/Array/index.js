const strings= ['a', 'b', 'c', 'd'];
const numbers = [1,2,3,4,5];
// Variable array is somewhere in memory and the computer knows it.
// When I do array[2], i'm telling the computer, hey go to the array and grab the 3rd item from where the array is stored.


//push
strings.push('e'); //O(1) --> Happening to end of the array

//pop
strings.pop(); //O(1) --> Happening to end of the array
strings.pop(); //O(1) --> Happening to end of the array

//unshift
strings.unshift('x') //O(n) --> Happening to beginning of the array

//splice
strings.splice(2, 0, 'alien'); //O(n/2) => //O(n) -> Index the 2 position and shift the rest entire array

console.log(strings)
