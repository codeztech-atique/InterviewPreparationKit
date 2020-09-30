function Distinct(array) {
    return unique = array.filter((v, i) => array.indexOf(v) === array.lastIndexOf(v));
 }



var array = [4,1,2,1,2];

console.log(Distinct(array))