export {};

class Rooms {
    constructor(public roomNo: number) {}
}

class House {
    private rooms: Rooms[] = [];
    constructor() {
        this.rooms.push(new Rooms(111));
    }

    getHouse() {
        console.log(this.rooms);
    }
}

const house = new House();
house.getHouse();