// let & const Block Scope and Shadowing in JS
// https://www.youtube.com/watch?v=lW_erSjyMeM
const c = 11;
{
    var a = 10;
    let b = 20;
    const c = 30;
    console.log(c);
}
console.log("Hello");


console.log(c);