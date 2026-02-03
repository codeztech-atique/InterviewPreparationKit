// https://leetcode.com/problems/toeplitz-matrix/ - Easy

var isToeplitzMatrix = function(matrix) {
    //console.log(matrix.length)
    for(let i = 0; i < matrix.length; i++) {
       for(let j = 0; j < matrix[i].length; j++) {
        if (matrix[i][j] !== matrix[i+1][j+1]) {
            return false
        }
       }
    }
    return true;
};

const matrix = [[1,2,3,4],[5,1,2,3],[9,5,1,2]];

isToeplitzMatrix(matrix);