// 1
// 2 3
// 4 5 6
// 7 8 9 10
// 11 12 13 14 15


const floydsTriangle = (n) => {
    let num = 1;
    for(let i = 0; i < n; i++) {
        let str = "";
        for(let j = i + 1; j > 0; j--) {
            str+= `${num} `;
            num++;
        }
        console.log(str);
    }
}

floydsTriangle(5);
