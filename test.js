const removeBrackets = (str) => {
    let arr = [];
    for(let i = 0; i < str.length; i++) {
        if(str[i] === '(' || str[i] === '{' || str[i] === '[') {
            arr.push(str[i]);
        }

        if(arr.length == 0) {
            return false;
        }

        switch(str[i]) {
            case ')': arr.pop(); break;
            case '}': arr.pop(); break;
            case ']': arr.pop(); break;
        }
    }

    if(arr.length === 0) {
        return true;
    } else {
        return false;
    }
}


const expr = "([{}]){}{}";
const exprClosingBracket = "([{}]))";

if (removeBrackets(exprClosingBracket)) {
   console.log("Balanced");
} else {
   console.log("Not Balanced");
}