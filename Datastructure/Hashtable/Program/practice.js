var arr2 = [2,5,1,90,3,44,6,2];

function firtRepeatingElement2(arr) {
    var rep;
    var res = {};
    for(var i=0;i<arr.length;i++) {
        if(Object.values(res).indexOf(arr[i])> -1) {
            rep = arr[i]
        } else {
            res[i] = arr[i];
        }
    }
    if(!rep) {
        rep = 'No duplicates found!';
    }
    return rep;
}

console.log(firtRepeatingElement2(arr2));