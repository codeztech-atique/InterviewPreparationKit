// Object Proto type ES5

// const protoType1 = { name : 'Atique Ahmed' };
// const object1 = Object.create(protoType1);

// console.log(Object.getPrototypeOf(object1) === protoType1); // Return True;


// // Object Proto type ES6

// const protoType2 = { name : 'Atique Ahmed' };
// const object2 = Object.create(protoType2);

// console.log(Reflect.getPrototypeOf(object2) === protoType2); // Return True;


// ------------------------- SetProtoTypeOf ---------------------------

// const obj = {
//     getNumber() {
//         return 42;
//     }
// }

// const child = {};

// Object.setPrototypeOf(child, obj)

// console.log(child.getNumber())

// ------------------------- Deleting the ProtoType ---------------------------

// const obj = {
//     getNumber() {
//         return 42;
//     }
// }


// const child = {};
// Object.setPrototypeOf(child, obj);

// child.__proto__ = obj; // Dont use proto, because its deprecated from lots of browsers

// Object.setPrototypeOf(child, null);

// console.log(child.getNumber())


// ------------------------- Object Create ---------------------------


// const obj = {
//     firstName: 'Atique',
//     lastName: 'Ahmed'
// }

// const proto = Object.create(obj);

// console.log(proto.firstName)

// Callbacks and Promise 
// Promise Chain

// ------------------------- Javascript Object ---------------------------

// const obj1 = {};
// obj1.nameProperties = {};
// obj1.addressProperties = {};
// obj1.nameProperties.firstName = 'Atique';
// obj1.nameProperties.lastName = 'Ahmed';

// obj1.addressProperties.address = 'PO, PS - bangalore'


// console.log(obj1)


// const obj2 = {};

// obj2['firstName'] = 'Atique'
// obj2['lastName'] = 'Atique'

// console.log(obj2);

// console.log("Object Keys:", Object.keys(obj2));

// console.log("Object Values:",Object.values(obj2));

// const obj3 = {
//    firtName: 'Atique',
//    lastName: 'Ahmed',
//    getProfile() {
//        return 'Developer'
//    }
// };


// console.log(obj3);
// console.log(obj3.getProfile());