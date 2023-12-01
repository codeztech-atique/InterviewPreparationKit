"use strict";
var VehicalType;
(function (VehicalType) {
    VehicalType["CAR"] = "car";
    VehicalType["MOTORCYCLE"] = "motorcycle";
})(VehicalType || (VehicalType = {}));
class ParkingTicket {
    constructor(ticketNumber, entryTime, vehicalType) {
        this.ticketNumber = ticketNumber;
        this.entryTime = entryTime;
        this.vehicalType = vehicalType;
    }
    getTicketNumber() {
        return this.ticketNumber;
    }
    getEntryTime() {
        return this.entryTime;
    }
    getVehicalType() {
        return this.vehicalType;
    }
}
class ParkingLot {
    constructor(car, motorcycle) {
        this.car = car;
        this.motorcycle = motorcycle;
    }
    getParkingSpace() {
        return "Remaining parking space for Car: " + this.car + ", Motorcycle : " + this.motorcycle;
    }
    findAvailableSpaceAndAllocate(vehicalType) {
        if (vehicalType == VehicalType.CAR) {
            if (this.car > 0) {
                this.car--;
                return true;
            }
            else {
                return false;
            }
        }
        else if (vehicalType === VehicalType.MOTORCYCLE) {
            if (this.motorcycle > 0) {
                this.motorcycle--;
                return true;
            }
            else {
                return false;
            }
        }
        else {
            return false;
        }
    }
    generateParkingTicket(vehicalType) {
        const parkingTicket = Math.random().toString(32).substring(2, 8);
        return vehicalType === VehicalType.CAR ? 'C-' + parkingTicket : 'M-' + parkingTicket;
    }
}
const parkingLot = new ParkingLot(1, 1);
const allocateVehical = parkingLot.findAvailableSpaceAndAllocate(VehicalType.MOTORCYCLE);
if (allocateVehical) {
    const getTicket = parkingLot.generateParkingTicket(VehicalType.MOTORCYCLE);
    const parkingSpace = new ParkingTicket(getTicket, new Date(), VehicalType.MOTORCYCLE);
    console.log("Ticket Number:", parkingSpace.getTicketNumber());
    console.log("Entry time:", parkingSpace.getEntryTime());
    console.log("Vehical Type:", parkingSpace.getVehicalType());
    console.log("Remaining parking space:", parkingLot.getParkingSpace());
}
else {
    console.log("Parking full.");
}
