function printPairSum(data) {
    data.forEach(element => {
        console.log(element);
    }); //O(n)

    data.forEach(element1 => {
        data.forEach(element2 => {
            console.log(element1 + element2);
        });
    }); //O(n^2)
}

// Time complexsity - O(n + n^2) -> We do care worst case here so again time complexity -> O(n^2)
printPairSum([1,2,3,4,5])