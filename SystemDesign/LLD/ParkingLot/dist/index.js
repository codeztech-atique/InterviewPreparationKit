"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//////////////////////
// Domain & Types  //
//////////////////////
var VehicleType;
(function (VehicleType) {
    VehicleType["CAR"] = "car";
    VehicleType["BIKE"] = "bike";
})(VehicleType || (VehicleType = {}));
////////////////////////////
// Default Implementations //
////////////////////////////
// Pick the smallest-id slot (works like a min-heap if kept sorted)
class SmallestIdParkingStrategy {
    chooseSlot(availableSlotIds) {
        if (availableSlotIds.length === 0)
            return null;
        return availableSlotIds[0];
    }
}
// Simple hourly pricing with grace period and per-type base
class HourlyPricingStrategy {
    constructor(basePerHour = {
        [VehicleType.CAR]: 50,
        [VehicleType.BIKE]: 20,
    }, graceMinutes = 10 // free if <= grace
    ) {
        this.basePerHour = basePerHour;
        this.graceMinutes = graceMinutes;
    }
    computeFee(entry, exit, type) {
        const ms = exit.getTime() - entry.getTime();
        const minutes = Math.max(0, Math.ceil(ms / (60 * 1000)));
        if (minutes <= this.graceMinutes)
            return 0;
        // Bill per started hour
        const hours = Math.ceil(minutes / 60);
        return hours * this.basePerHour[type];
    }
}
//////////////////////
// Parking Lot LLD  //
//////////////////////
class ParkingLot {
    constructor(slots, // full inventory
    parkingStrategy = new SmallestIdParkingStrategy(), pricingStrategy = new HourlyPricingStrategy()) {
        this.parkingStrategy = parkingStrategy;
        this.pricingStrategy = pricingStrategy;
        this.available = new Map();
        this.occupied = new Map();
        // init availability lists (sorted ascending)
        const byType = {
            [VehicleType.CAR]: [],
            [VehicleType.BIKE]: [],
        };
        for (const s of slots)
            byType[s.type].push(s.id);
        for (const t of Object.values(VehicleType)) {
            byType[t].sort((a, b) => a - b);
            this.available.set(t, byType[t]);
        }
    }
    /** Allocate a slot and return a ticket. Throws if full for that type. */
    park(type) {
        const list = this.available.get(type) ?? [];
        const chosen = this.parkingStrategy.chooseSlot(list);
        if (chosen == null) {
            throw new Error(`No ${type} slots available`);
        }
        // remove chosen id from availability (since list is sorted, remove index 0)
        list.shift();
        const entryTime = new Date();
        const id = this.newTicketId(type);
        this.occupied.set(id, { slotId: chosen, type, entryTime });
        return { id, type, slotId: chosen, entryTime };
    }
    /** Deallocate a slot using the ticket id, compute fee, and return a receipt. */
    unpark(ticketId) {
        const record = this.occupied.get(ticketId);
        if (!record)
            throw new Error("Invalid or already-closed ticket");
        const exitTime = new Date();
        const amount = this.pricingStrategy.computeFee(record.entryTime, exitTime, record.type);
        // free the slot back into availability (keep list sorted)
        const list = this.available.get(record.type);
        insertSorted(list, record.slotId);
        this.occupied.delete(ticketId);
        return {
            ticketId,
            slotId: record.slotId,
            vehicleType: record.type,
            entryTime: record.entryTime,
            exitTime,
            durationMinutes: Math.ceil((exitTime.getTime() - record.entryTime.getTime()) / (60 * 1000)),
            amount,
        };
    }
    /** Helpers */
    getAvailability(type) {
        if (type)
            return (this.available.get(type) ?? []).length;
        return {
            [VehicleType.CAR]: (this.available.get(VehicleType.CAR) ?? []).length,
            [VehicleType.BIKE]: (this.available.get(VehicleType.BIKE) ?? []).length,
        };
    }
    newTicketId(type) {
        const n = randomInt(100000, 999999);
        return `${type === VehicleType.CAR ? "CAR" : "BIKE"}-${n}`;
    }
}
//////////////////////
// Utility helpers  //
//////////////////////
function randomInt(min, max) {
    // inclusive
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
function insertSorted(arr, value) {
    // binary insert to keep O(log n) search + O(n) shift
    let lo = 0, hi = arr.length;
    while (lo < hi) {
        const mid = (lo + hi) >> 1;
        if (arr[mid] < value)
            lo = mid + 1;
        else
            hi = mid;
    }
    arr.splice(lo, 0, value);
}
//////////////////////
// Quick demo run   //
//////////////////////
const lot = new ParkingLot([
    // inventory (id + type)
    { id: 1, type: VehicleType.CAR },
    { id: 2, type: VehicleType.CAR },
    { id: 3, type: VehicleType.BIKE },
]);
// Allocate
const t1 = lot.park(VehicleType.CAR);
console.log("parked:", t1); // { id: 'CAR-xxxxxx', slotId: 1, ... }
const t2 = lot.park(VehicleType.CAR);
console.log("parked:", t2); // slotId: 2
console.log("availability:", lot.getAvailability()); // { car: 0, bike: 1 }
// Deallocate (simulate time passing by editing entryTime if you want)
const receipt1 = lot.unpark(t1.id);
console.log("receipt:", receipt1);
console.log("availability:", lot.getAvailability()); // car back to 1
