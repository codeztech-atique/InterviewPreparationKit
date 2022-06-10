// Javascript Map
// const chalk = require('chalk');

const map = new Map();

map.set('foo', 123);

console.log(map);
// console.log(chalk.gray("Map values:"), map.get('foo'));

// console.log(chalk.green("Map has:"), map.has('foo')); // True

// console.log(chalk.red("Map Delete:"), map.delete('foo')); // True

// console.log(chalk.blue("Map has:"), map.has('foo')); // False

// Javascipt Map vs Object 

// Object Concept --

// let obj = {};

// adding properties to a object
// obj.prop1 = 1;
// obj[2]    =  2;

// getting nr of properties of the object
// console.log(Object.keys(obj).length)

// deleting a property
// delete obj[2]

// console.log(obj)

// Map Concept --

const myMap = new Map();

const keyString = 'a string',
    keyObj = {},
    keyFunc = function() {};

// setting the values
myMap.set(keyString, "value associated with 'a string'");
myMap.set(keyObj, 'value associated with keyObj');
myMap.set(keyFunc, 'value associated with keyFunc');

// console.log(myMap.size); // 3

// getting the values
console.log("--->", myMap.get(keyString));    // "value associated with 'a string'"
console.log(myMap.get(keyObj));       // "value associated with keyObj"
console.log(myMap.get(keyFunc));      // "value associated with keyFunc"

console.log(myMap.get('a string'));   // "value associated with 'a string'"
                         // because keyString === 'a string'
console.log(myMap.get({}));           // undefined, because keyObj !== {}
console.log(myMap.get(function() {})) // undefined, because keyFunc !== function () {}



// Main diffrence Accidental Keys --- Like in the Object -- 
// If we do obj['foo'] = '123'
// Again obj['foo'] = '1234' // this will replace the previous record