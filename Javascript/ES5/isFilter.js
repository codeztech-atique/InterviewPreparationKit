//find and findIndex

function checkAdult(age) {
    //return age >= 30;
    if(age >= 30) {
        return age;
    } else {
        return 0;
    }
}

var ages = [22, 21, 33, 43, 65, 12, 10, 9];


console.log("Example of Filter function:", ages.filter(checkAdult)); // creates new array
