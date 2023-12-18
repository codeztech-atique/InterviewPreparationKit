const secondLagest = (arr) => {
    let largest = arr[0];
    let secondLargest = arr[0];
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] > largest) {
            secondLargest = largest;
            largest = arr[i];
        }
        else if(arr[i] < largest && arr[i] > secondLargest) {
            secondLargest = arr[i];
        }
    }
    console.log(largest, secondLargest)
}

secondLagest([6,8,2,1,3,9]);