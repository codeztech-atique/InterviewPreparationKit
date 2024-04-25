const url = "https://atiqueahmed.com";
const accessKey = "Annsdik323sdfsdf23";
const secreatKey = "2msdfsd+@3423dsfsa3242342134edfsdf32432423";

const quickSort = (arr, left = 0, right = arr.length - 1) => {
    if (left >= right) {
        return;
    }

    const pivot = partition(arr, left, right);
    quickSort(arr, left, pivot - 1);
    quickSort(arr, pivot + 1, right);

    return arr;
}

const partition = (arr, left, right) => {
    const pivotElement = arr[right];
    let partitionIndex = left; 

    for (let j = left; j < right; j++) {
        if (arr[j] <= pivotElement) {
            swap(arr, partitionIndex, j);
            partitionIndex++;
        }
    }
    swap(arr, partitionIndex, right); // Moving the pivot to the correct place
    return partitionIndex;
}

const swap = (arr, i, j) => {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}

console.log(quickSort([2, 5, 3, 0, 57, 9, 12, 13]));