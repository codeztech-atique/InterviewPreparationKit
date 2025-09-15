
const box1 = [1,2,3,4,5,6,7,8,9,10];
const box2 = [3,2,3,4,8,6,7,10,9,11];

function compressTwoBox(box1, box2) {
    box1.forEach(element => {
        console.log(element);
    });
    box2.forEach(element => {
        console.log(element);
    });
}


// O(a + b) --> Because its it having 2 input -- > We are not looping into the same items --> then add
// O(a * b) - > If it is nested loop like - below -> Then multiply

function compressTwoBox(box1, box2) {
    box1.forEach(element => {
        console.log(element);
        box2.forEach(element => {
            console.log(element);
        });
    });  
}