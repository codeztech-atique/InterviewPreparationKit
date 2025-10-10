export = {}

enum VehicalType {
    CAR = "car",
    BIKE = "bike"
}

type slot = {
    id: number;
    type: VehicalType
}

type Ticket = {
    id: number;
    type: VehicalType;
    slotId: number;
    entryTime: Date;
}

type Receipt = {
    ticketId: number;
    slotId: number;
    vehicalType: number;
    entryTime: Date;
    exitTime: Date;
    duringMinutes: number;
    amount: number;
}

interface ParkingStrategy {
    chooseSlot(availableSlotIds: number[]): number | null;
}

interface PricingStrategy {
    computeFee(entry: Date, exit: Date, type: VehicalType) : number
}