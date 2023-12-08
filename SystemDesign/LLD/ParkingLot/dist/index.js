"use strict";
var VehicalType;
(function (VehicalType) {
    VehicalType["CAR"] = "car";
    VehicalType["BIKE"] = "bike";
})(VehicalType || (VehicalType = {}));
class Parking_Ticket {
    constructor(entryTime, ticketNumber, vehicalType) {
        this.entryTime = entryTime;
        this.ticketNumber = ticketNumber;
        this.vehicalType = vehicalType;
    }
    getEntryTime() {
        return this.entryTime;
    }
    getTicketNumber() {
        return this.ticketNumber;
    }
    getVehicalType() {
        return this.vehicalType;
    }
}
class Parking_Lot {
    // Define parking capacity
    constructor(car, bike) {
        this.car = car;
        this.bike = bike;
    }
    allocatedParking(vehicalType) {
        if (vehicalType === VehicalType.CAR) {
            if (this.car > 0) {
                this.car--;
                return true;
            }
            else {
                return false;
            }
        }
        else if (vehicalType === VehicalType.BIKE) {
            if (this.bike > 0) {
                this.bike--;
                return true;
            }
            else {
                return false;
            }
        }
    }
    generateParkingTicket(vehicalType) {
        const parkingTicket = Math.random().toString(32).substring(2, 8);
        return vehicalType === VehicalType.CAR ? 'CAR-' + parkingTicket.toUpperCase() : 'BIKE-' + parkingTicket.toUpperCase();
    }
}
const defineParking = new Parking_Lot(0, 2);
const allocateParkingForCar = defineParking.allocatedParking(VehicalType.CAR);
if (allocateParkingForCar) {
    const generateParkingTicket = defineParking.generateParkingTicket(VehicalType.CAR);
    const parking = new Parking_Ticket(new Date(), generateParkingTicket, VehicalType.CAR);
    console.log(VehicalType.CAR, " is parked in the parking.");
    console.log("Parking time:", parking.getEntryTime());
    console.log("Parking ticket:", parking.getTicketNumber());
    console.log("Vehical Type:", parking.getVehicalType());
}
else {
    console.log("Parking full.");
}
