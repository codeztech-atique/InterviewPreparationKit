// We need to cache the data, if we got the same answer for same input
const obj = {};

function addto80(n) {
    obj[n] = 80 + n;
    console.log(obj)
    return obj[n];
}


// addto80(5);
// addto80(5);
// addto80(5);
// addto80(5);

// In the above example each and every time it is calling addto80, because we don't cache it.

function memorizationCache(n) {
    if(obj[n]) {
        console.log("I am getting from the cahce !!!");
        return obj[n];
    } else {
        console.log("I calling the main function addto80");
        return addto80(n);
    }
}


console.log(memorizationCache(5));
console.log(memorizationCache(5));
console.log(memorizationCache(5));
console.log(memorizationCache(5));
console.log(memorizationCache(51));
console.log(memorizationCache(51));
console.log(memorizationCache(51));