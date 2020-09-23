// Bubble Sort

var arr = [1,4,2,6,3,5];

// 1,2,3,4 --------

for(var i=0;i<arr.length;i++) {
    for(var j=i+1;j<arr.length;j++) {
        if(arr[i]<arr[j]) { //swap in assending order
            var temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
        }
    }
}

console.log(arr);