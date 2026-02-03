function getAllTriplets(arr) {
    let triplets = [];
    arr.sort((a, b) => a - b); // sorting the array in ascending order
    const n = arr.length;
 
    for (let i = 0; i < n - 2; i++) {
       let left = i + 1;
       let right = n - 1;
 
       while (left < right) {
          let triplet = [arr[i], arr[left], arr[right]];
          triplets.push(triplet);
 
          // Move the pointers towards the center
          left++;
          right--;
 
          // Skip duplicate elements from the left
          while (left < right && arr[left] === triplet[1]) {
             left++;
          }
 
          // Skip duplicate elements from the right
          while (left < right && arr[right] === triplet[2]) {
             right--;
          }
       }
 
       // Skip duplicate elements from the outer loop
       while (i < n - 2 && arr[i] === arr[i + 1]) {
          i++;
       }
    }
 
    return triplets;
 }
 
 const arr = [3, 3, 4, 7, 8];
 console.log(getAllTriplets(arr));
 