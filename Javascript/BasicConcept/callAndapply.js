// call() Method: It calls the method, taking the owner object as argument. The keyword this refers to the ‘owner’ of the function or the object it belongs to. We can call a method which can be used on different objects. 

// Syntax:

// object.objectMethod.call( objectInstance, arguments )
// Parameters: It accepts two parameters as mentioned above and described below:

// objectInstance: It holds the instance of an object.
// arguments: The call() method takes the comma separated arguments.



// apply() Method: The apply() method is used to write methods, which can be used on different objects. It is different from the function call() because it takes arguments as an array. 

// Syntax:

// object.objectMethod.apply(objectInstance, arrayOfArguments)
// Parameters: It accepts two parameters as mentioned above and described below:

// objectInstance: It holds the instance of an object.
// arrayOfArguments: The apply() method takes the array of arguments.
// Difference between call() and apply() method: The only difference is call() method takes the arguments separated by comma while apply() method takes the array of arguments.


var car = { 
    registrationNumber: "GA12345",
    brand: "Toyota"
}

function displayDetails(ownerName) {
    //console.log(this)
    console.log(ownerName + ", this is your car: " + this.registrationNumber + " " + this.brand);
}


displayDetails("Without Call and Apply - Atique") // without call and apply

displayDetails.apply(car, ["Sunny"]); // Vivian, this is your car: GA12345 Toyota

// displayDetails.call(car, "Vivian"); // Vivian, this is your car: GA12345 Toyota


// const person = {
//     fullName: function() {
//       return this.firstName + " " + this.lastName;
//     }
//   }
  
//   const person1 = {
//     firstName: "Mary",
//     lastName: "Doe"
//   }
  
//   // This will return "Mary Doe":
//   person.fullName.apply(person1);
//   console.log(person.fullName())