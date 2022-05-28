// Stack is LIFO - Last in First out. Example of Stack is browser button. Once I clicked on back button, it takes me to the back page.

// Stack Example - Palindrom of a String using Push and Pop using JavaScript Array

// There are 3 methods - Push, Pop, Peek.

// Peek is not a Javascript Method - What peek does to shows the last index of the array.

// We can do something like this - myarr[myarr.length - 1] <----- Peek






const stackExample = (mystr) => {
    var myarr = [];
    var str = "";
   
    // Pushed into the Stack
    for(var i=0;i<mystr.length;i++) {
       myarr.push(mystr[i]);
    }
    console.log("Arr:", myarr);
    // Remove from the Stack
    for(var i=0;i<mystr.length;i++) {
    //    console.log(myarr.peek()); 
       str += myarr.pop()
    }
    
    if(mystr === str) {
        return true;
    } else {
        return false;
    }
};

console.log("Is PalinDrome:", stackExample('racecar'));  // Palindrom or not

// Given Input - racecar

// |r|
// |a|
// |c|
// |e|
// |c|
// |a|
// |r|

// Pop -- variable - after reverse --> racecar
// |r|
// |a|
// |c|
// |e|
// |c|
// |a|
// |r|

// let palindromStatus = givenInput === afterReverse ? true : false || Ternary oparator





