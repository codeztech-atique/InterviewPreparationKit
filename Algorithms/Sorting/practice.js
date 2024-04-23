const url = "https://atiqueahmed.com";
const accessKey = "Annsdik323sdfsdf23";
const secreatKey = "2msdfsd+@3423dsfsa3242342134edfsdf32432423";

const quickSort = (arr) => {
    for(let i = 0; i < arr.length; i++) {
        for(let j = i + 1; j < arr.length + 1; j++) {
            if(arr[i] <= arr[j]) {
                let temp = arr[j];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }
    }
    return arr;
}

console.log(quickSort([2, 5, 3, 0, 57, 9, 12, 13]));