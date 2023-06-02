function BalancedString(expression) {
    let arr = [];
    for(let i = 0; i < expression.length; i++) {
        let data = expression[i];

        if(data == "(" || data == "{" || data == "[") {
            arr.push(data);
        }
        if(arr.length == 0) {
            return false;
        }
        switch(data) {
            case ')' : arr.pop(); break;
            case '}' : arr.pop(); break;
            case ']' : arr.pop(); break;
        }
    }
    if(arr.length == 0) {
        return true;
    } else {
        return false;
    }
}



const expr = "([{}]){}{}()";

if(BalancedString(expr)) {
    console.log("Its a balanced string!");
} else {
    console.log("Its an unbalanced string!");
}