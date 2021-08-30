// Time Complexity - O(n * 2)
// Space Complexity - O(1) --> We are not creating any datastructure

let flag = 1;
const selectionSort = (arr) => {
    let smallElement; 
    for(let i = flag; i < arr.length; i++) {
        if(arr[i] < arr[i - 1]) {
           smallElement = arr[i];
        }
        if(i === arr.length - 1) {
            const index = arr.lastIndexOf(smallElement); // always pick the last one
            if (index > -1) {  // Element found here
                arr.splice(index, 1); // First find the index and delete
                arr.splice(flag-1, 0, smallElement); // Then insert into specific index location
                flag++;
            }
        }
    }
    
    for(let i = 1; i < arr.length; i++) {
        if(arr[i] < arr[i - 1]) {
            flag--;
            selectionSort(arr);
        }
    }

    return arr;
}

const arr = [99, 44, 3, 6, 2, 1, 5, 63, 87, 2, 283, 4, 0];

console.log(selectionSort(arr))