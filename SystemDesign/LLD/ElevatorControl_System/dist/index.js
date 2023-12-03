"use strict";
var Direction;
(function (Direction) {
    Direction["UP"] = "UP";
    Direction["DOWN"] = "DOWN";
    Direction["STOPPED"] = "STOPPED";
})(Direction || (Direction = {}));
class Elevator {
    constructor() {
        this.currentFloor = 1;
        this.direction = Direction.STOPPED;
    }
    move(destinationFloor) {
        if (destinationFloor > this.currentFloor) {
            this.direction = Direction.UP;
        }
        else if (destinationFloor < this.currentFloor) {
            this.direction = Direction.DOWN;
        }
        else {
            this.direction = Direction.STOPPED;
        }
        this.currentFloor = destinationFloor;
    }
}
class ElevatorControlSystem {
    constructor(numElevators) {
        this.elevators = Array.from({ length: numElevators }, () => new Elevator());
    }
    requestElevator(floor) {
        // For simplicity, we'll just assign the first elevator to the requested floor
        const elevator = this.elevators[0];
        elevator.move(floor);
    }
}
// Example usage
const ecs = new ElevatorControlSystem(1);
ecs.requestElevator(5);
console.log(`Elevator is now at floor ${ecs.elevators[0].currentFloor}`);
