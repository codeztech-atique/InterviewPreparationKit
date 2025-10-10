const slidingWindow = (arr, k) => {
    const chArr = [], res = [];
    for(let i = 0; i < arr.length; i++) {
        if(chArr.length == k) {
            res.push(Math.max(...chArr));
            chArr.shift();
        } 
        chArr.push(arr[i]);
    }
    if(chArr.length == k) {
        res.push(Math.max(...chArr))
    }
    return res;
}


const mainFunction = (arr, k) => {
    const result = slidingWindow(arr, k);
    console.log("Result:", result);
}

mainFunction([1,3,-1,-3,5,3,6,7], 3);