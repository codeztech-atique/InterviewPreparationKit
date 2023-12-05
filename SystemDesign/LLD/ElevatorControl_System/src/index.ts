enum Direction {
    UP = "up",
    DOWN = "down",
    STOPPED ="stopped"
}

class Elevator {
    currentFloor: number;
    noOfFloor: number;
    direction: Direction;
    constructor(noOfFloor: number) {
        this.currentFloor = 0;
        this.noOfFloor = noOfFloor;
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
        return this.direction === Direction.STOPPED;
    }

    getStatus() {
        return {
            currentFloor: this.currentFloor,
            direction: this.direction
        }
    }
}

class Elevator_ControlSystem {
    elevator: Elevator[];
    constructor(noOfElevator: number, noOfFloor: number) {
        this.elevator = Array.from({ length: noOfElevator}, () => new Elevator(noOfFloor));
    }

    requestedFloor(floor: number) {
        const nearestElevator = this.nearestElevator();
        const mvElevator = this.moveElevator(nearestElevator, floor);
        console.log(nearestElevator, "Current floor is:", floor)
    }

    nearestElevator() {
        return this.elevator[0];
    }

    moveElevator(nearestElevator: Elevator, floor: number) {
        while(nearestElevator.currentFloor != floor) {
            if(nearestElevator.currentFloor < floor) {
                nearestElevator.movingUp();
            } else {
                nearestElevator.movingDown();
            }
        }
        nearestElevator.direction = Direction.STOPPED;
    }
}

const elevatorControll = new Elevator_ControlSystem(4, 10);
elevatorControll.requestedFloor(7);

console.log("Status:", elevatorControll.elevator[0]);
