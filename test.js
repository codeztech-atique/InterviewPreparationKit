const SinglePrimeNumber = (num) => {
    if(num < 2) {
        return true;
    } 

    for(let i = 2; i <= Math.sqrt(num); i++) {
        if(num % i === 0) {
            return false;
        }
    }

    return true;
}

const MultiplePrimeNumber = (arr) => {
    for(let i = 0; i < arr.length; i++) {
        let num = arr[i];
    }

    let result = arr.filter((num) => {
        if(num < 2) {
            return true;
        } 

        for(let i = 2; i <= Math.sqrt(num); i++) {
            if(num % i === 0) {
                return false;
            }
        }
        return true;
    })
    return result;
}


var arr = [1,2,4,7,11,12,15,17,19,21,27,29,43,44];
console.log(SinglePrimeNumber(17));

console.log(MultiplePrimeNumber(arr));