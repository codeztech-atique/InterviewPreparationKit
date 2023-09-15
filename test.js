function repetingElements(arr) {
    return arr = arr.filter((i, v) => arr.indexOf(v) !== arr.lastIndexOf(v))
}

function nonRepetingElements(arr) {
    return arr = arr.filter((i, v) => arr.indexOf(v) === arr.lastIndexOf(v))
}


var arr = [4,1,2,1,2];
console.log(repetingElements(arr))
console.log(nonRepetingElements(arr))