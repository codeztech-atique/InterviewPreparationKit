const numberPrint = (n) => {
    for(let i = 0; i <= n; i++) {
        let str = "";
        for(let j = i + 1; j >= 1; j--) {
            str += `${j} `
        }
        console.log(str);
    }
}

const starPrint = (n) => {
    for(let i = 0; i <= n; i++) {
        let str = "";
        for(let j = 0; j < i + 1; j++) {
            str += `* `
        }
        console.log(str);
    }
}


numberPrint(5);
starPrint(5)