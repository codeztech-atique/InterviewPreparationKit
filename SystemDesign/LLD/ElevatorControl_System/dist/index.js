"use strict";
var Direction;
(function (Direction) {
    Direction["UP"] = "up";
    Direction["DOWN"] = "down";
    Direction["STOPPED"] = "stopped";
})(Direction || (Direction = {}));
class Elevator {
    constructor(totalFloor) {
        this.currentFloor = 0;
        this.totalFloor = totalFloor;
        this.direction = Direction.STOPPED;
    }
    goingUp() {
        this.currentFloor++;
        this.direction = Direction.UP;
    }
    goingDown() {
        this.currentFloor--;
        this.direction = Direction.DOWN;
    }
    isStopped() {
        return this.direction === Direction.STOPPED;
    }
    getStatus() {
        return {
            currentFloor: this.currentFloor,
            direction: this.direction
        };
    }
}
class Elevator_Control_System {
    constructor(totalElevator, noOfFloor) {
        this.elevator = Array.from({ length: totalElevator }, () => new Elevator(noOfFloor));
    }
    requestedFloor(floor) {
        const nearElevator = this.nearestElevator();
        const mvElevator = this.moveElevator(nearElevator, floor);
        console.log("Elevator now:", mvElevator);
    }
    nearestElevator() {
        return this.elevator[0];
    }
    moveElevator(nearElevator, requestedFloor) {
        while (nearElevator.currentFloor != requestedFloor) {
            if (nearElevator.currentFloor < requestedFloor) {
                nearElevator.goingUp();
            }
            else {
                nearElevator.goingDown();
            }
        }
        nearElevator.direction = Direction.STOPPED;
        return nearElevator;
    }
}
const elevatorControlSystem = new Elevator_Control_System(4, 10);
const requestedFloor = elevatorControlSystem.requestedFloor(6);
console.log("Status:", elevatorControlSystem.elevator[0].getStatus());
