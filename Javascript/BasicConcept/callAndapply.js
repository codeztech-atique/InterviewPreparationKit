var car = { 
    registrationNumber: "GA12345",
    brand: "Toyota"
}

function displayDetails(ownerName) {
    //console.log(this)
    console.log(ownerName + ", this is your car: " + this.registrationNumber + " " + this.brand);
}


// displayDetails(" Atique") // without call and apply

displayDetails.apply(car, ["Sunny"]); // Vivian, this is your car: GA12345 Toyota


displayDetails.call(car, "Vivian"); // Vivian, this is your car: GA12345 Toyota


const person = {
    fullName: function() {
      return this.firstName + " " + this.lastName;
    }
  }
  
  const person1 = {
    firstName: "Mary",
    lastName: "Doe"
  }
  
  // This will return "Mary Doe":
  person.fullName.apply(person1);