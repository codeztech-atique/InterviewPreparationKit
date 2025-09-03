class Rooms {
  constructor(public roomNo: number) {}
}

class House {
  private rooms: Rooms[] = [];
  constructor() {
    this.rooms.push(new Rooms(101)); // House creates rooms
  }
  getHouse() {
    console.log(this.rooms);
  }
}

const house = new House();
house.getHouse()

// If house is destroyed, rooms are gone too
