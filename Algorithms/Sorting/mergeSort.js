// Divide and Conqure

// Time Complexity - O(n log(n))
// Space Complexity - O(n)

function merge(left, right) {
    let arr = []
    // Break out of loop if any one of the array gets empty
    while (left.length && right.length) {
        // Pick the smaller among the smallest element of left and right sub arrays 
        if (left[0] < right[0]) {
            arr.push(left.shift())  
        } else {
            arr.push(right.shift()) 
        }
    }
    
    // Concatenating the leftover elements
    // (in case we didn't go through the entire left or right array)
    return [ ...arr, ...left, ...right ]
}

const mergeSort = (array) => {
    const half = array.length / 2
  
    // Base case or terminating case
    if(array.length < 2){
      return array 
    }
    
    const left = array.splice(0, half);
    return merge(mergeSort(left),mergeSort(array))
};
  
console.log(mergeSort([2, 5, 3, 0, 57, 9, 12, 13]));