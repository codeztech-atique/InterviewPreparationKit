//find and findIndex

function checkAdult(age) {
    //return age >= 30;
    if(age >= 30) {
        return age;
    } 
}

var ages = [33, 43, 65, 22];


console.log("Example of Some function:", ages.some(checkAdult)); // Because some age are still greater than 30
