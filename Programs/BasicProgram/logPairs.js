const abc = [1,2,3,4,5];

function logPair(abc) {
    for(var i=0;i<abc.length;i++) {
        for(var j=i+1;j<abc.length;j++) {
           console.log(abc[i], " ", abc[j]);
        }
    }
}

logPair(abc);