export {};

//////////////////////
// Domain & Types  //
//////////////////////

enum VehicleType {
  CAR = "car",
  BIKE = "bike",
}

type Slot = {
  id: number;          // unique within a lot
  type: VehicleType;
};

type Ticket = {
  id: string;          // e.g., CAR-123456
  type: VehicleType;
  slotId: number;
  entryTime: Date;
};

type Receipt = {
  ticketId: string;
  slotId: number;
  vehicleType: VehicleType;
  entryTime: Date;
  exitTime: Date;
  durationMinutes: number;
  amount: number;      // fee charged
};

/////////////////////////
// Strategy Interfaces //
/////////////////////////

interface ParkingStrategy {
  // Choose an available slot id given the inventory for that type
  chooseSlot(availableSlotIds: number[]): number | null;
}

interface PricingStrategy {
  // Compute final amount based on time range & vehicle type
  computeFee(entry: Date, exit: Date, type: VehicleType): number;
}

////////////////////////////
// Default Implementations //
////////////////////////////

// Pick the smallest-id slot (works like a min-heap if kept sorted)
class SmallestIdParkingStrategy implements ParkingStrategy {
  chooseSlot(availableSlotIds: number[]): number | null {
    if (availableSlotIds.length === 0) return null;
    return availableSlotIds[0];
  }
}

// Simple hourly pricing with grace period and per-type base
class HourlyPricingStrategy implements PricingStrategy {
  constructor(
    private basePerHour: Record<VehicleType, number> = {
      [VehicleType.CAR]: 50,
      [VehicleType.BIKE]: 20,
    },
    private graceMinutes = 10 // free if <= grace
  ) {}

  computeFee(entry: Date, exit: Date, type: VehicleType): number {
    const ms = exit.getTime() - entry.getTime();
    const minutes = Math.max(0, Math.ceil(ms / (60 * 1000)));
    if (minutes <= this.graceMinutes) return 0;

    // Bill per started hour
    const hours = Math.ceil(minutes / 60);
    return hours * this.basePerHour[type];
  }
}

//////////////////////
// Parking Lot LLD  //
//////////////////////

class ParkingLot {
  private available: Map<VehicleType, number[]> = new Map();
  private occupied: Map<string, { slotId: number; type: VehicleType; entryTime: Date }> = new Map();

  constructor(
    slots: Slot[], // full inventory
    private parkingStrategy: ParkingStrategy = new SmallestIdParkingStrategy(),
    private pricingStrategy: PricingStrategy = new HourlyPricingStrategy()
  ) {
    // init availability lists (sorted ascending)
    const byType: Record<VehicleType, number[]> = {
      [VehicleType.CAR]: [],
      [VehicleType.BIKE]: [],
    };
    for (const s of slots) byType[s.type].push(s.id);
    for (const t of Object.values(VehicleType)) {
      byType[t].sort((a, b) => a - b);
      this.available.set(t, byType[t]);
    }
  }

  /** Allocate a slot and return a ticket. Throws if full for that type. */
  park(type: VehicleType): Ticket {
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
  unpark(ticketId: string): Receipt {
    const record = this.occupied.get(ticketId);
    if (!record) throw new Error("Invalid or already-closed ticket");

    const exitTime = new Date();
    const amount = this.pricingStrategy.computeFee(record.entryTime, exitTime, record.type);

    // free the slot back into availability (keep list sorted)
    const list = this.available.get(record.type)!;
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
  getAvailability(type?: VehicleType): number | Record<VehicleType, number> {
    if (type) return (this.available.get(type) ?? []).length;
    return {
      [VehicleType.CAR]: (this.available.get(VehicleType.CAR) ?? []).length,
      [VehicleType.BIKE]: (this.available.get(VehicleType.BIKE) ?? []).length,
    };
  }

  private newTicketId(type: VehicleType): string {
    const n = randomInt(100000, 999999);
    return `${type === VehicleType.CAR ? "CAR" : "BIKE"}-${n}`;
  }
}

//////////////////////
// Utility helpers  //
//////////////////////

function randomInt(min: number, max: number): number {
  // inclusive
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function insertSorted(arr: number[], value: number) {
  // binary insert to keep O(log n) search + O(n) shift
  let lo = 0, hi = arr.length;
  while (lo < hi) {
    const mid = (lo + hi) >> 1;
    if (arr[mid] < value) lo = mid + 1;
    else hi = mid;
  }
  arr.splice(lo, 0, value);
}

//////////////////////
// Quick demo run   //
//////////////////////

const lot = new ParkingLot(
  [
    // inventory (id + type)
    { id: 1, type: VehicleType.CAR },
    { id: 2, type: VehicleType.CAR },
    { id: 3, type: VehicleType.BIKE },
  ]
);

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
