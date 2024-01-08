const slidingWindow = (arr, k) => {
    let chArr = [], finalArr = [];
    for(let i = 0; i < arr.length; i++) {
        if(chArr.length == k) {
            finalArr.push(Math.max(...chArr));
            chArr.shift();
        }
        chArr.push(arr[i])
    }
    if(chArr.length == k) {
        finalArr.push(Math.max(...chArr));
    }
    return finalArr;
}


const mainFunction = (arr, k) => {
    const result = slidingWindow(arr, k);
    console.log("Results:", result);
}

mainFunction([1,3,-1,-3,5,3,6,7], 3);