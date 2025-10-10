"use strict";
var VehicalType;
(function (VehicalType) {
    VehicalType["CAR"] = "car";
    VehicalType["BIKE"] = "bike";
})(VehicalType || (VehicalType = {}));
class Parking_Ticket {
    constructor() {
        this.min = 100000;
        this.max = 999999;
        this.entryTime = null;
        this.exitTime = null;
        this.ticket = "";
    }
    generateTicket(vehicalType) {
        if (vehicalType == VehicalType.CAR) {
            this.entryTime = new Date();
            let uuid = Math.random() * (this.max - this.min) + 1;
            this.ticket = 'CAR-' + uuid;
        }
        else if (vehicalType == VehicalType.BIKE) {
            this.entryTime = new Date();
            let uuid = Math.random() * (this.max - this.min) + 1;
            this.ticket = 'CAR-' + uuid;
        }
        return {
            entryTime: this.entryTime,
            ticket: this.ticket
        };
    }
}
class Parking_Lot {
    constructor(car, bike) {
        this.parkingTicket = new Parking_Ticket(); // ✅ instance
        this.bike = bike;
        this.car = car;
    }
    allocateParking(vehicalType) {
        if (vehicalType == VehicalType.CAR) {
            if (this.car > 0) {
                this.car--;
                return true;
            }
            else {
                return false;
            }
        }
        else {
            if (this.bike > 0) {
                this.bike--;
                return true;
            }
            else {
                return false;
            }
        }
    }
    generateTicket(vehicalType) {
        const parkingInfo = this.parkingTicket.generateTicket(vehicalType);
        return parkingInfo;
    }
}
const defineParking = new Parking_Lot(2, 1);
defineParking.allocateParking("car") == true ? console.log("Car is parked") : console.log("Car Parking Full");
console.log("Entry Time & Generate Ticket:", defineParking.generateTicket("car"));
defineParking.allocateParking("car") == true ? console.log("Car is parked") : console.log("Car Parking Full");
console.log("Entry Time & Generate Ticket:", defineParking.generateTicket("car"));
defineParking.allocateParking("bike") == true ? console.log("Bike is parked") : console.log("Car Parking Full");
console.log("Entry Time & Generate Ticket:", defineParking.generateTicket("bike"));
module.exports = {};
