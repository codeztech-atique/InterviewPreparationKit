const isAppleAvailableInMarket = true;
const isBreadAvailableInMarket = false;

const isAppleAvailable = () => {
    return new Promise((resolve, reject) => {
        if(isAppleAvailableInMarket) {
            resolve('Yes!!! Apple is avalaible to the market !!!!')
        } else {
            reject('Opps !!! Apple are not avalaible to the market !!!!')
        }
    });
}

const isBreadAvailable = () => {
    return new Promise((resolve, reject) => {
        if(isBreadAvailableInMarket) {
            resolve('Yes!!! Bread is avalaible to the market !!!!')
        } else {
            reject('Opps !!! Bread are not avalaible to the market !!!!')
        }
    });
}

const mainFunction = async() => {

    // Using Promise Chain

    // isAppleAvailable().then((res1) => {
    //     console.log(res1);
    //     return isBreadAvailable();
    // }).then((res2) => {
    //     console.log(res2);
    // }).catch((err) => {
    //     console.log(err);
    // });
    
    // Using Promise All
    // Promise.all([isAppleAvailable(), isBreadAvailable()]).then((result) => {
    //    console.log(result)
    // }).catch((err) => {
    //    console.log(err);
    // })

    // Using Async Await
    try {
        const appleStatus = await isAppleAvailable();
        const breadStatus = await isBreadAvailable();
        console.log("appleStatus:", appleStatus);
        console.log("breadStatus", breadStatus);
    } catch(err) {
        console.log(err);
    }

}

mainFunction();

// Promise you can do in home task
// const arr = [1, 4, 2, 3, 4, 'a', 'b'];

// eleminate char from arr
// Sort the array
// Distinct Element from array [ 1, 2, 3, 4]


// const promise1 = new Promise((resolve, reject) => {
//     setTimeout(resolve, 200, "one");
// });
   
// const promise2 = new Promise((resolve, reject) => {
//     setTimeout(resolve, 200, "two");
// });
   
// Promise.race([promise1, promise2]).then((value) => {
//     console.log(value);
// });


