const merge = (arr1, arr2) => {
    let sorted = [];
  
    while (arr1.length && arr2.length) {
      if (arr1[0] < arr2[0]) sorted.push(arr1.shift());
      else sorted.push(arr2.shift());
    };
  
    return sorted.concat(arr1.slice().concat(arr2.slice()));
};
  
console.log(merge([2, 5, 3, 0, 57], [9, 12, 13]));