//find and findIndex

function checkAdult(age) {
    //return age >= 30;
    if(age >= 30) {
        return age;
    } 
}

var ages = [33, 43, 65, 45];


console.log("Example of Every function:", ages.every(checkAdult)); // Because some age are still less than 30
