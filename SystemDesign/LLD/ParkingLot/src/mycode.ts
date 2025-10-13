// Behavioral Pattern - Strategy

export = {}


enum VehicalType {
    CAR = "car",
    BIKE = "bike"
}

type Ticket = | {
    id: string, 
    type: VehicalType,
    entryTime: Date;
} | {
    message: string
}

type Receipt = | {
    id: string,
    type: VehicalType,
    entryTime: Date,
    exitTime: Date,
    price: number
} | {
    message: string
}

type ActiveVehical = {
    type: VehicalType,
    entryTime: Date
}

interface PricingStrategy {
    computePrice(entryTime: Date, exitTime: Date, type: VehicalType) : number
}

class HourlyPricing implements PricingStrategy {
    computePrice(entryTime: Date, exitTime: Date, type: VehicalType) {
        let diff = exitTime.getTime() - entryTime.getTime();
        let minutesCalculation = 30 * 60 * 1000;
        let actualMinutes = Math.ceil(diff / minutesCalculation);
        let rate = type == VehicalType.CAR ? 50 : 20;
        return actualMinutes * rate;
    }
}

class ParkingLot {
    car: number;
    bike: number;
    active: Map<string, ActiveVehical>;
    pricing: HourlyPricing;
    ticket: string = "";
    constructor(car: number, bike: number, pricing: HourlyPricing = new HourlyPricing()) {
        this.car = car;
        this.bike = bike;
        this.active = new Map<string, ActiveVehical>();
        this.pricing = pricing;
    }

    generateTicket(type: VehicalType) {
        return type+"-"+Math.floor(Math.random() * 1_000_0000);
        // return type+"-44444";
    }

    park(type: VehicalType, entryTime: Date) : Ticket {
        if(type == VehicalType.CAR && this.car > 0) {
            this.car--;
            this.ticket = this.generateTicket(type);
            this.active.set(this.ticket, {type, entryTime});
        } else if(type == VehicalType.BIKE && this.bike > 0) {
            this.bike--;
            this.ticket = this.generateTicket(type);
            this.active.set(this.ticket, {type, entryTime});
        } else {
            return {
                message: "Parking Full"
            }
        }

        return {
            id: this.ticket,
            type, 
            entryTime
        }
    }

    unpark(ticketId: string) : Receipt {
        if(this.active.has(ticketId)) {
           
            ticketId.startsWith(VehicalType.CAR) ? this.car++ : this.bike++;
            let computePrice = this.pricing.computePrice(this.active.get(ticketId)?.entryTime || new Date(), new Date(),  ticketId.startsWith(VehicalType.CAR) ? VehicalType.CAR : VehicalType.BIKE);
            
            this.active.delete(ticketId);

            return {
                id: ticketId,
                type: ticketId.startsWith(VehicalType.CAR) ? VehicalType.CAR : VehicalType.BIKE,
                entryTime: this.active.get(ticketId)?.entryTime || new Date(),
                exitTime: new Date(Date.now() - 2 * 60 * 60 * 1000),
                price: computePrice
            }
        } else {
            return {
                message: "Vehical Details not found !!!"
            }
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


console.log(parking.unpark("car-44444"));
console.log(parking.unpark("bike-44444"));
console.log(parking.unpark("bike-44444"));

