"use strict";
var VehicalType;
(function (VehicalType) {
    VehicalType["CAR"] = "car";
    VehicalType["BIKE"] = "bike";
})(VehicalType || (VehicalType = {}));
class ParkingTicket {
    constructor(ticketNo, vehicalType) {
        this.ticketNo = ticketNo;
        this.entryTime = new Date();
        this.vehicalType = vehicalType;
    }
    getTicketNo() {
        return this.ticketNo;
    }
    getEntryTime() {
        return this.entryTime;
    }
    getVehicalType() {
        return this.vehicalType;
    }
}
class ParkingLot {
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
        return vehicalType === VehicalType.CAR ? 'C-' + parkingTicket : 'B-' + parkingTicket;
    }
    getStatus() {
        return "Car have space left:" + this.car + " and bike has space left:" + this.bike;
    }
}
const parkingLot = new ParkingLot(0, 1);
const parkingAllocatedCar = parkingLot.allocatedParking(VehicalType.CAR);
const parkingAllocateBike = parkingLot.allocatedParking(VehicalType.BIKE);
if (parkingAllocatedCar) {
    const getTicketNo = parkingLot.generateParkingTicket(VehicalType.CAR);
    const parkingTicket = new ParkingTicket(getTicketNo, VehicalType.CAR);
    console.log("Parking ticket:", parkingTicket.getTicketNo());
    console.log("Parking time:", parkingTicket.getEntryTime());
    console.log("Vehical Type:", parkingTicket.getVehicalType());
}
else {
    console.log("No parking avaiable for CAR.");
}
if (parkingAllocateBike) {
    const getTicketNo = parkingLot.generateParkingTicket(VehicalType.BIKE);
    const parkingTicket = new ParkingTicket(getTicketNo, VehicalType.BIKE);
    console.log("Parking ticket:", parkingTicket.getTicketNo());
    console.log("Parking time:", parkingTicket.getEntryTime());
    console.log("Vehical Type:", parkingTicket.getVehicalType());
}
else {
    console.log("No parking avaiable for Bike.");
}
