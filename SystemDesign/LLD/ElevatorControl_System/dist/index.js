"use strict";
var Direction;
(function (Direction) {
    Direction["UP"] = "up";
    Direction["DOWN"] = "down";
    Direction["STOPPED"] = "stopped";
})(Direction || (Direction = {}));
class Elevator {
    constructor(totalFloor) {
        this.currentFloor = 1;
        this.totalFloor = totalFloor;
        this.direction = Direction.STOPPED;
    }
    movingUp() {
        this.currentFloor++;
        this.direction = Direction.UP;
    }
    movingDown() {
        this.currentFloor--;
        this.direction = Direction.DOWN;
    }
    isStopped() {
        return this.direction == Direction.STOPPED;
    }
    getStatus() {
        return {
            currentFloor: this.currentFloor,
            direction: this.direction
        };
    }
}
class ElevatorControlSystem {
    constructor(numElevators, totalFloors) {
        this.elevator = Array.from({ length: numElevators }, () => new Elevator(totalFloors));
    }
    requestedFloor(floor) {
        const getNearElevator = this.getNearestElevator();
        const mvElevator = this.moveElevator(getNearElevator, floor);
    }
    getNearestElevator() {
        return this.elevator[0];
    }
    moveElevator(getNearElevator, floor) {
        while (getNearElevator.currentFloor != floor) {
            if (getNearElevator.currentFloor < floor) {
                getNearElevator.movingUp();
            }
            else {
                getNearElevator.movingDown();
            }
        }
        getNearElevator.direction = Direction.STOPPED;
    }
}
// Example usage:
const elevatorSystem = new ElevatorControlSystem(3, 10);
elevatorSystem.requestedFloor(2);
// Check the status of the first elevator
console.log(elevatorSystem.elevator[0].getStatus());
