var car = { 
    registrationNumber: "GA12345",
    brand: "Toyota",

    displayDetails: function(){
        console.log(this.registrationNumber + " " + this.brand);
    }
}

car.displayDetails(); // GA12345 Toyota

var myCarDetails =  car.displayDetails;
myCarDetails();


var myCarDetails = car.displayDetails.bind(car); 
myCarDetails(); // GA12345 Toyota


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