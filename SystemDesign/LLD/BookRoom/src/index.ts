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
        const availableRoom = this.findAvailableRoom(start, end);
        if(availableRoom) {
            const newMeeting = new Meeting(start, end, availableRoom);
            this.meetings.push(newMeeting);
            availableRoom.booked = true;
            return availableRoom.name;
        }
    }

    findAvailableRoom(start: Date, end: Date) : Room | null {
        for(const room of this.rooms) {
            if(!room.booked && this.findAvailableSlot(room, start, end)) {
                return room;
            }
        }
        return null;
    }
    
    findAvailableSlot(room: Room, start: Date, end: Date) : boolean {
        for(const meeting of this.meetings) {
            if(meeting.room === room) {
                if(
                    (start >= meeting.start && end < meeting.end) ||
                    (end > meeting.start && end <= meeting.end) ||
                    (start <= meeting.start && end >= meeting.end)
                ) {
                        return false
                }
            }
        }
        return true;
    }
}

const roomA = new Room("A");
const roomB = new Room("B");
const roomC = new Room("C");

const scheduler = new Scheduler([roomA, roomB, roomC]);

const bookedRoomA = scheduler.bookMeeting(new Date('2023-12-01T09:00:00'), new Date('2023-12-01T10:00:00'));
const bookedRoomB = scheduler.bookMeeting(new Date('2023-12-01T09:00:00'), new Date('2023-12-01T10:00:00'));
const bookedRoomC = scheduler.bookMeeting(new Date('2023-12-01T09:00:00'), new Date('2023-12-01T10:00:00'));
const bookedRoomD = scheduler.bookMeeting(new Date('2023-12-01T09:00:00'), new Date('2023-12-01T10:00:00'));

if(bookedRoomA) {
    console.log("Room is booked for - ", bookedRoomA);
} else {
    console.log("Slot not avaliable, please select the different time. ")
}

if(bookedRoomB) {
    console.log("Room is booked for - ", bookedRoomB);
} else {
    console.log("Slot not avaliable, please select the different time. ")
}

if(bookedRoomC) {
    console.log("Room is booked for - ", bookedRoomC);
} else {
    console.log("Slot not avaliable, please select the different time. ")
}


if(bookedRoomD) {
    console.log("Room is booked for - ", bookedRoomC);
} else {
    console.log("Slot not avaliable, please select the different time. ")
}
