class Room {
    name: string;
    booked: boolean;
    constructor(name: string) {
        this.name = name;
        this.booked = false;
    }
}

class Meeting {
    start: Date;
    end: Date;
    room: Room;
    constructor(start: Date, end: Date, room: Room) {
        this.start = start;
        this.end = end;
        this.room = room;
    }
}

class Scheduler {
    rooms: Room[];
    meetings: Meeting[];
    constructor(rooms: Room[]) {
        this.rooms = rooms;
        this.meetings = [];
    }

    bookMeeting(start: Date, end: Date) {
        let availableRoom = this.findAvailableRoom(start, end);
        if(availableRoom) {
            let newMeeting = new Meeting(start, end, availableRoom);
            this.meetings.push(newMeeting);
            availableRoom.booked = true;
        }
        return availableRoom?.name;
    }

    findAvailableRoom(start: Date, end: Date) {
        for(const room of this.rooms) {
            if(!room.booked && this.isSlotAvailable(room, start, end)) {
                return room;
            }
        }
        return null;
    }

    isSlotAvailable(room: Room, start: Date, end: Date) : boolean {
        for(let meeting of this.meetings) {
            if(meeting.room.name === room.name) {
                if(
                    (start >= meeting.start && start < meeting.end) ||
                    (end > meeting.start && end <= meeting.end) ||
                    (start <= meeting.start && end >= meeting.end)
                ) {
                    return false;
                }
            }
        }
        return true;
    }
}

const roomA = new Room("A");
const roomB = new Room("B");
const schduler = new Scheduler([roomA, roomB]);

const bookedRoomA = schduler.bookMeeting(new Date("2023-12-08T09:00:10"),new Date("2023-12-08T10:00:10"));
const bookedRoomB = schduler.bookMeeting(new Date("2023-12-08T09:00:10"),new Date("2023-12-08T10:00:10"));
const bookedRoomC = schduler.bookMeeting(new Date("2023-12-08T09:00:10"),new Date("2023-12-08T10:00:10"));

if(bookedRoomA) {
    console.log("Room booked for - ", bookedRoomA);
} else {
    console.log("No Room Avaliable.")
}

if(bookedRoomB) {
    console.log("Room booked for - ", bookedRoomB);
} else {
    console.log("No Room Avaliable.")
}

if(bookedRoomC) {
    console.log("Room booked for - ", bookedRoomC);
} else {
    console.log("No Room Avaliable.")
}