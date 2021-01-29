function waveSort(arr){
    arr = arr.sort(function(a, b) {
        return b - a; 
    });

    for (var i = 1; i < arr.length; i += 2) {
        if (arr[i-1] < arr[i]) {
            var temp = arr[i];
            arr[i] = arr[i-1];
            arr[i-1] = temp;
        }
        if (i+1 < arr.length && arr[i+1] < arr[i]) {
            temp = arr[i];
            arr[i] = arr[i+1];
            arr[i+1] = temp;
        }
    }
    return arr;
}

var waved = waveSort([73, 80, 40, 86, 14, 96, 10, 56, 61, 84, 82, 36, 85]);
console.log(JSON.stringify(waved));