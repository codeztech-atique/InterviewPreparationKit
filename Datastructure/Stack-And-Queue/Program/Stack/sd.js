

function foo(a, ...c) {
    console.log(c.length);
    return a* c.length;

}
console.log(foo(12, "hello","world", true, 7))