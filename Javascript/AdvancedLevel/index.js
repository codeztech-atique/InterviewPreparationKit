const obj = {};

const memorizeFunction = (key) => {
    if(obj[key]) {
        console.log('Return from Cache', obj[key]);
        return obj[key];
    } else {
        let value = key.split('-');
        obj[key] = parseInt(value[0]) + parseInt(value[1]);
        return obj[key];
    }
}

const sum = (a, b) => {
    let keyPair = a+"-"+b;
    let result = memorizeFunction(keyPair);
    return result;
}



console.log("Sum:", sum(5, 6));
console.log("Sum:", sum(5, 6));
console.log("Sum:", sum(6, 6));

