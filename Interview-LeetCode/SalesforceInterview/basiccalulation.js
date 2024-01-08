class Basic_Calculator {
    constructor(str) {
        this.str = str;
        this.stackNumber = [];
        this.stackOperator = [];
    }

    calculation() {
        for(let i = 0; i < this.str.length; i++) {
            let elements = this.str[i];
            if(elements == '+' || elements == '-' || elements == '*' || elements == '/') {
                this.stackOperator.push(this.str[i]);
            } else {
                this.stackNumber.push(this.str[i]);
            }
        }
        console.log(this.stackNumber, this.stackOperator)
    }
}

const basicCalulation = (str) => {
    const calculator = new Basic_Calculator(str);
    calculator.calculation();
}

console.log(basicCalulation("2-1+2"))