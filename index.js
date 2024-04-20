const main = async(str) => {
    let data = str.split('\n');
    let actualLastArrElement = data[data.length-1];
    let startIndex = 2;
    recursionLoop(data, startIndex, actualLastArrElement);
}

const recursionLoop = (data, startIndex, actualLastArrElement) => {
    var arrayEachiteration = [], xy = 0;
    for(let i=startIndex;i<data.length;i++) {
        var checkType = parseInt(data[i]);
        if(isNaN(checkType)) {
            arrayEachiteration.push(data[i]);
            if((i+1) === (data.length)) {
                xy = i + 1;
            }
        } else {
            xy = i + 1;
            break;
        }
    }
    let lastArrElement = arrayEachiteration[arrayEachiteration.length-1];
    if(lastArrElement !== actualLastArrElement && (xy-1) !== (data.length)) {
        // Before Going to recurssion - We need to find out the distinc element and make the count - 
        findDistinct(arrayEachiteration);
        recursionLoop(data, xy, actualLastArrElement)
    } else {
        findDistinct(arrayEachiteration);
    }
}


// Final Result Here
const findDistinct = (arr) => {
    var result = [];
    //console.log("Actual Array: =",arr)
    for(let yy=0;yy<arr.length;yy++) {
        if(result.indexOf(arr[yy]) === -1) {
            result.push(arr[yy]);
        }
    }
    // console.log("Result: =",result)
    console.log(result.length)
}

// Input here
main("2\n\
7\n\
saskatoon\n\
toronto\n\
winnipeg\n\
toronto\n\
vancouve\n\
saskatoon\n\
toronto\n\
3\n\
edmonton\n\
edmonton\n\
edmonton");