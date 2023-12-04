"use strict";
var VehicalType;
(function (VehicalType) {
    VehicalType["CAR"] = "car";
    VehicalType["MOTORCYCLE"] = "motorcycle";
})(VehicalType || (VehicalType = {}));
class ParkingTicket {
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
    getVehicleType() {
        return this.vehicalType;
    }
}
class ParkingLot {
    constructor(car, motorcycle) {
        this.car = car;
        this.motorcycle = motorcycle;
    }
    getAvailableSpace() {
        return "Available space for - " + VehicalType.CAR + " " + this.car + " \nAvailable space for - " + VehicalType.MOTORCYCLE + " " + this.motorcycle;
    }
    allocateVehicles(vehicleType) {
        if (vehicleType === VehicalType.CAR) {
            if (this.car > 0) {
                this.car--;
                return true;
            }
            else {
                return false;
            }
        }
        else if (vehicleType === VehicalType.MOTORCYCLE) {
            if (this.motorcycle > 0) {
                this.motorcycle--;
                return true;
            }
            else {
                return false;
            }
        }
        return false;
    }
    getParkingTicket(vehicleType) {
        return vehicleType === VehicalType.CAR ? 'CAR-' + Math.random().toString(32).substring(2, 8) : 'MOTORCYCLE-' + Math.random().toString(32).substring(2, 8);
    }
}
const parkingLot = new ParkingLot(1, 0);
const allocateCar = parkingLot.allocateVehicles(VehicalType.CAR);
const allocateMotorCycle = parkingLot.allocateVehicles(VehicalType.MOTORCYCLE);
if (allocateCar) {
    const getTicketNumber = parkingLot.getParkingTicket(VehicalType.CAR);
    const parkingTicket = new ParkingTicket(new Date(), getTicketNumber, VehicalType.CAR);
    console.log("Parking time for " + VehicalType.CAR, parkingTicket.getEntryTime());
    console.log("Parking ticket for " + VehicalType.CAR, " - ", parkingTicket.getTicketNumber());
    console.log("Vehicle Type - " + parkingTicket.getVehicleType());
    console.log(parkingLot.getAvailableSpace());
}
else {
    console.log("Parking full - ", parkingLot.getAvailableSpace());
}
console.log();
console.log('==================================');
console.log();
if (allocateMotorCycle) {
    const getTicketNumber = parkingLot.getParkingTicket(VehicalType.MOTORCYCLE);
    const parkingTicket = new ParkingTicket(new Date(), getTicketNumber, VehicalType.MOTORCYCLE);
    console.log("Parking time for " + VehicalType.MOTORCYCLE, " - ", parkingTicket.getEntryTime());
    console.log("Parking ticket for " + VehicalType.MOTORCYCLE, parkingTicket.getTicketNumber());
    console.log("Vehicle Type - " + parkingTicket.getVehicleType());
    console.log(parkingLot.getAvailableSpace());
}
else {
    console.log("Parking full - ", parkingLot.getAvailableSpace());
}
