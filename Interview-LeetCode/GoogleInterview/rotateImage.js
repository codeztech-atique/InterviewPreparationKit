// Matrix Problem

var rotate = function(matrix) {
    let finalMatrix = [];
    let arr = [];
    let x = 0;
    
    for(let i = matrix.length - 1; i >= 0; i--) {
        for(let j = x; j < matrix[i].length; j++) {
            arr.push(matrix[i][j]);
            break;
        }
        if(i === 0) {
            finalMatrix.push(arr);
            arr = [];

            if(finalMatrix.length != matrix.length) {
                x++;
                i = matrix.length;
            } else {
                break;
            }
        }
    }

    // Extra Code
    for(let i = 0; i < matrix.length; i++) {
        matrix[i] = finalMatrix[i];
    }
    //console.log("Given Matrix:", matrix);
    // console.log("Output Matrix:", finalMatrix);
    return matrix;
};

console.log(rotate([[1,2,3],[4,5,6],[7,8,9]]));
// console.log(rotate([[5,1,9,11],[2,4,8,10],[13,3,6,7],[15,14,12,16]]));

// [
//     [1,2,3],
//     [4,5,6],
//     [7,8,9]
// ]
// [
//     [7,4,1],
//     [8,5,2],
//     [9,6,3]
// ]

// [ 
//     [1,2,3,4],
//     [5,1,2,3],
//     [9,5,1,2]
// ]
// [
//     [1,5,9],
//     [5,1,2],
//     [1,2,3],
//     [2,3,4]
// ]

