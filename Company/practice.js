class Validarentheses {
    constructor(str) {
        this.paranthesis = str;
    }

    calculation() {
        let stack = [];
        console.log(this.paranthesis)
        for(let i = 0; i < this.paranthesis.length; i++) {
            let charToInsert = this.paranthesis[i];
            if(charToInsert == '(' || charToInsert == '{' || charToInsert == '[') {
                stack.push(charToInsert);
            }
            if(stack.length == 0) {
                return false;
            }
            switch(charToInsert) {
                case ')': 
                    if(stack[stack.length - 1] ==  '(') {
                        stack.pop();
                    } else {
                        stack.push(charToInsert)
                    }
                break;

                case '}': 
                    if(stack[stack.length - 1] ==  '{') {
                        stack.pop();
                    } else {
                        stack.push(charToInsert)
                    }
                break;

                case ']': 
                    if(stack[stack.length - 1] ==  '[') {
                        stack.pop();
                    } else {
                        stack.push(charToInsert)
                    }
                break;
            }
        }
        console.log(stack)
        if(stack.length == 0) {
            return true;
        } else {
            return false;
        }
    }
}


const isValid = (str) => {
    const isValidClass = new Validarentheses(str);
    const checkValidBraces = isValidClass.calculation();
    return checkValidBraces;
}

console.log(isValid("(){}[](()}{}{{}}"));