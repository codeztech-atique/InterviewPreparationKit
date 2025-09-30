// Linear Search or sequential search

const linearSearch = (arr, key) => {
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] == key) {
            return { index: i, value : arr[i] }
        }
    }
}  


const arr = [4,3,2,1,7,6];
console.log(linearSearch(arr, 7));