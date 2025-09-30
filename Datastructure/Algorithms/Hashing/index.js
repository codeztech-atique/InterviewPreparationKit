// Youtube video 1 - https://www.youtube.com/watch?v=W5q0xgxmRd8
// Youtube video 2 - https://www.youtube.com/watch?v=j612Fj-mgCY
// Youtube video 3 - https://www.youtube.com/watch?v=hmMYPZ5wLX0

// Problem statements = Store the value in array -- and retrive the value from array using 0(1) using Hashing
const arr = [40, 23, 52, 91, 64, 45, 86];

const hashing = (arr) => {
    let newArray = [];
    newArray.length = arr.length;
    for(let i = 0; i < arr.length; i++) {
        let remainder = arr[i] % 10;
        console.log("Arr[i]:", arr[i], remainder);
        newArray[remainder] = arr[i];
    }
    console.log("Arr:", newArray);
    return newArray;
}

const findValueFromArray = (arr, target) => { // Using O(1);
    let findIndex = target % 10;
    if(arr[findIndex]) {
        return [findIndex, arr[findIndex]];
    }
    return -1;
}


const mainFunction = (arr) => {
    // Store in array = 
    const storeUsingHasing = hashing(arr);

    console.log("Store in Array:", storeUsingHasing);

    // Get the value from array = 
    const valueToFind = 91;

    console.log("Find value from Array:", findValueFromArray(arr, valueToFind));
}


mainFunction(arr);