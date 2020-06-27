//find and findIndex

function checkAdult(age) {
    return age >= 30;
}

var ages = [22, 21, 33, 43, 65, 12, 10, 9];


console.log("Example of find:", ages.find(checkAdult));
console.log("Exmaple of findIndex:", ages.findIndex(checkAdult));