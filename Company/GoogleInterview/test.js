function add(a, b, callback) {
    console.log(`${a} + ${b} = ${a+b}`);
    callback();
}

add(8, 32, function disp() {
    console.log("Addition");
})