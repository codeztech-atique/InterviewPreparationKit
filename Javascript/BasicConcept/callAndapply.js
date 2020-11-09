var car = { 
    registrationNumber: "GA12345",
    brand: "Toyota"
}

function displayDetails(ownerName) {
    //console.log(this)
    console.log(ownerName + ", this is your car: " + this.registrationNumber + " " + this.brand);
}


displayDetails.apply(car, ["Sunny", "Audi"]); // Vivian, this is your car: GA12345 Toyota


displayDetails.call(car, "Vivian"); // Vivian, this is your car: GA12345 Toyota
