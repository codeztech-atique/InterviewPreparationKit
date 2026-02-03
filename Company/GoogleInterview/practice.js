const containerWithWater = (arr) => {
    let start = 0, end = arr.length - 1, diff = 0, calculation = 0, result = 0;
    while(start != end) {
        if(arr[start] >= arr[end]) {
            diff = end - start;
            calculation = diff * arr[end];
            end--;
        } else if(arr[start] <= arr[end]) {
            diff = end - start;
            calculation = diff * arr[start];
            start++;
        }
        if(calculation > result) {
            result = calculation;
        }
    }
    return result;
}


// const arr = [1,8,6,2,5,4,8,3,7]; // Result 49
// const arr = [1, 1]; //Result 1
// const arr = [1, 2]; //Result 1
console.log(containerWithWater(arr));