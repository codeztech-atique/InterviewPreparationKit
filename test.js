const arraysEqual = (arr1, arr2) => {
    if(arr1.length != arr2.length) {
        return false;
    } else {
        let count = 0;
        for(let i = 0; i < arr1.length; i++) {
            if(arr1[i] === arr2[i]) {
                count++;
            }
        }
        if(count === arr1.length) {
            return true;
        } else {
            return false;
        }
    }
}


const array1 = [1, 2, 3];
const array2 = [1, 2, 3];

const array3 = [1,2];
const array4 = [1,null,2]; 

const array5 = [1,2,1]
const array6 = [1,1,2]

console.log(arraysEqual(array1, array2)); // Output: true
console.log(arraysEqual(array3, array4)); // Output: true
console.log(arraysEqual(array5, array6)); // Output: false