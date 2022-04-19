var car = {
   registrationDetails: "WB-32124",
   brand: "Hyundai",
   details: function() {
     return this.brand+" "+this.registrationDetails
   }
}

var copyCar = car.details.bind(car);
console.log(copyCar());


// Creating my own bind function
Function.prototype.myOwnBind = function(newThis) {
    if (typeof this !== "function") {
      throw new Error(this + "cannot be bound as it's not callable");
    }
    var boundTargetFunction = this;
    return function boundFunction() {
      return boundTargetFunction.apply(newThis);
    };
};

// const person = {
//   firstName:"John",
//   lastName: "Doe",
//   fullName: function () {
//     return this.firstName + " " + this.lastName;
//   }
// }

// const member = {
//   firstName:"Hege",
//   lastName: "Nilsen",
// }

// let fullName = person.fullName;

// console.log(fullName())