"use strict";
var VehicalType;
(function (VehicalType) {
    VehicalType["CAR"] = "car";
    VehicalType["BIKE"] = "bike";
})(VehicalType || (VehicalType = {}));
class HourlyPricing {
    computePrice(entryTime, exitTime, type) {
        let diff = exitTime.getTime() - entryTime.getTime();
        let MS = 30 * 60 * 1000;
        let actualMinutes = Math.ceil(diff / MS);
        let rate = type == VehicalType.CAR ? 50 : 25;
        return actualMinutes * rate;
    }
}
class ParkingLot {
    constructor(car, bike, pricing = new HourlyPricing()) {
        this.car = car;
        this.bike = bike;
        this.pricing = pricing;
        this.active = new Map();
    }
    generateTicket(type) {
        // return type+"-"+Math.floor(Math.random() * 1_000_000);
        return type + "-" + "12345";
    }
    park(type, entryTime) {
        let ticket = "";
        if (type == VehicalType.CAR && this.car > 0) {
            ticket = this.generateTicket(type);
            this.car--;
            this.active.set(ticket, { type, entryTime });
        }
        else if (type == VehicalType.BIKE && this.bike > 0) {
            ticket = this.generateTicket(type);
            this.bike--;
            this.active.set(ticket, { type, entryTime });
        }
        else {
            return {
                message: "Parking Full !!!"
            };
        }
        return {
            id: ticket,
            type,
            entryTime
        };
    }
    unpark(ticketId) {
        if (this.active.has(ticketId)) {
            let calculatePrice = this.pricing.computePrice(this.active.get(ticketId)?.entryTime || new Date(), new Date(), ticketId.startsWith(VehicalType.CAR) ? VehicalType.CAR : VehicalType.BIKE);
            let entryTime = this.active.get(ticketId)?.entryTime;
            this.active.delete(ticketId);
            return {
                id: ticketId,
                type: ticketId.startsWith(VehicalType.CAR) ? VehicalType.CAR : VehicalType.BIKE,
                entryTime: entryTime || new Date(),
                exitTime: new Date(),
                amount: calculatePrice
            };
        }
        else {
            return {
                message: "Parking not found !!! The ticket is not associate with this parking !!!"
            };
        }
    }
}
const parking = new ParkingLot(2, 2);
console.log(parking.park(VehicalType.CAR, new Date(Date.now() - 2 * 60 * 60 * 1000)));
console.log(parking.park(VehicalType.CAR, new Date(Date.now() - 2 * 60 * 60 * 1000)));
console.log(parking.park(VehicalType.CAR, new Date(Date.now() - 2 * 60 * 60 * 1000)));
console.log(parking.park(VehicalType.BIKE, new Date(Date.now() - 2 * 60 * 60 * 1000)));
console.log(parking.park(VehicalType.BIKE, new Date(Date.now() - 2 * 60 * 60 * 1000)));
console.log(parking.park(VehicalType.BIKE, new Date(Date.now() - 2 * 60 * 60 * 1000)));
console.log(parking.unpark("car-12345"));
console.log(parking.unpark("bike-12345"));
module.exports = {};
