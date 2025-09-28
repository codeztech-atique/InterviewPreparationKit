const invertated = (n) => {
    for(let i = 0; i <= n; i++) {
        let str = "";
        for(let j = i + 1; j <= n; j++) {
            str += `${i + 1} `
        }
        console.log(str);
    }
}


invertated(5);