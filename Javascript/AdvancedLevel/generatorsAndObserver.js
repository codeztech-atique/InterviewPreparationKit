// Example - https://www.dofactory.com/javascript/design-patterns/observer#:~:text=The%20Observer%20pattern%20offers%20a,design%20and%20promotes%20loose%20coupling
// Generators - They don't compute values all at the same time

// Using Normal function -- You don't have enoug memory to allocated all the memory's
// function range(upperbound) {
//     const result = [];
//     for(let i = 0; i < upperbound; i++) {
//         result.push(i);
//     }
//     return result;
// }

// console.log(range(1000000000))


// Using generator using In memory using i
// next() also the part of generators 
// function* range(upperbound) {
//     for(let i = 0; i < upperbound; i++) {
//        yield i;
//     }
// }

// for(const e1 of range(1000000000)) {
//     console.log(e1);
// }


// Observer using next
// function* gen() {
//     console.log('Started');
//     try {
//        let str = `1.  ${yield}`;
//        console.log(str);
//     } catch(e) {
//        console.log('Caught Error');
//     }
//     console.log(`1. ${yield}`); // yield told me to pause or suspand
//     console.log(`2. ${yield}`); // yield told me to pause or suspand
//     console.log(`3. ${yield}`); // yield told me to pause or suspand
//     return 'result';
// }

// const genObj = gen();

// Normal way without error
// genObj.next();
// genObj.next('Atique');
// genObj.next('sunny');
// genObj.next('atique');
// genObj.next('sonu');
// genObj.next('sonu111');


// Caught Error --

// console.log(genObj.next());
// console.log(genObj.throw(new Error('error')));


// console.log(genObj.next('sunny1'))
// console.log(genObj.next('sunny2'))
// console.log(genObj.next('sunny3'))
// console.log(genObj.next('sunny4'))
// console.log(genObj.return('sunny4'))
