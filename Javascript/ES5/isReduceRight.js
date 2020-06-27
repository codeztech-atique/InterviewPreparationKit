//find and findIndex

function myFunction(total, value) {
    console.log(total, '<-------->' ,value);
    return total + value;
}

var ages = [22, 21, 33, 43, 65, 12, 10, 9];


console.log("Example of isReduce function:", ages.reduceRight(myFunction)); // Reduce function data taken from the right
