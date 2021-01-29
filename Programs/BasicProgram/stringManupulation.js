function main(input) {
    let str = '';
    let result = [];
    let formatStr = [];
    let counter = 0;
    let start = 0;
    let end = 0;
    input = input + " ";
    for(let i=0;i<input.length;i++) {
        let sst = input.charAt(i);
        if(sst == '"') {
          if(counter === 0) {
            start = i;
          }  
          counter++;
        } else if(sst >= 'a' && sst<='z' && counter === 0 || sst >= 'A' && sst<='Z' && counter === 0) {
            str+=sst;
        } else if(sst === ' ' && counter === 0) {
            result.push(str);
            str = '';
        }
        if(counter===2) {
            end = i;
            //console.log(start, end)
            let ss = input.slice(start, end+1);
            formatStr.push(ss);
            counter = 0;
        }
    }
    // Final Calculation
    for(let i=0;i<result.length;i++) {
        if(result[i] === '') {
            let shiftEle = formatStr.shift();
            result[i] = shiftEle;
        }
    }
    console.log(result)
}
var str = `xyz abc mnp "asdf dfaa asdf" asd "fdas asdsdafF" sadfdsf "asdfasdf"`;
main(str)