const arr = [2, 5, 3, 0, 57, 9, 12, 13];

class Sorting {
    constructor() {
        this.arr = arr;
    }

    normalSort_WithThird_Variable() {
       for(let i = 0; i < this.arr.length; i++) {
          for(let j = i; j < this.arr.length; j++) {
            if(this.arr[i] > this.arr[j]) {
                let temp = this.arr[i];
                this.arr[i] = this.arr[j];
                this.arr[j] = temp;
            }
          }
       }
    }

    normalSort_WithOutThird_Variable() {
        for(let i = 0; i < this.arr.length; i++) {
            for(let j = i + 1; j < this.arr.length; j++) {
                if(this.arr[i] > this.arr[j]) {
                    this.arr[i] = this.arr[i] + this.arr[j];
                    this.arr[j] = this.arr[i] - this.arr[j];
                    this.arr[i] = this.arr[i] - this.arr[j];
                }
            }
        }
    }

    printSort() {
       return this.arr;
    }
}

const sortFunction = new Sorting();
sortFunction.normalSort_WithOutThird_Variable();
console.log(sortFunction.printSort());