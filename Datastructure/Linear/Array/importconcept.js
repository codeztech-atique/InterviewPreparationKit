// Reference Type

var object1 = { value : 10};
var object2 = object1;
var object3 = { value : 10};

object1 === object2 //true -> Can check from the chrome browser
object1 === object3 //false -> Because it is not the same object

// Context vs Scope

// console.log(this); // This means it is denoting the current object. If you do this in the
                   // Chrome browser console, then it will give you the window object. then you can do
// this.alert('Hello')    

// function abc(){
//     console.log(this);
// }
// abc();


// Instantiation
class Player {
    constructor(name, type) {
        this.name = name;
        this.type = type;
    }
    introduce() {
        console.log(`Hi I am ${this.name}, I'm a ${this.type}`);
    }
}
class Wizard extends Player {
    constructor(name, type) {
      super(name, type); //in order to access the data from Player constractor class
    }
    play() {
        console.log(`WEEE, I'm a ${this.type}`);
    }
}

const wizard1 = new Wizard("Atique", "Healer");
const wizard2 = new Wizard("Sunny", "Dark Magic");

wizard1.play();
wizard1.introduce();

//So when ever I created a player, I can ran the same class and 
// same function to introduce the player, Alright
