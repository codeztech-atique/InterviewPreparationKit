

function foo(a, ...c) {
    return a* c.length;

}
console.log(foo(12, "hello","world", true, 7))