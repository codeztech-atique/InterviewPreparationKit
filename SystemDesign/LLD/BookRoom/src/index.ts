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

    bookMeeting(start: Date, end: Date) : string | null {
        const availableRoom = this.findAvailableRoom(start, end);
        if(availableRoom) {
            const newMeeting = new Meeting(start, end, availableRoom);
            this.meetings.push(newMeeting);
            availableRoom.booked = true;
            return availableRoom.name;
        }
        return null
    }

    findAvailableRoom(start: Date, end: Date) : Room | null {
        for(const room of this.rooms) {
            if(!room.booked && this.findTimeSlot(room, start, end)) {
                return room;
            }
        }
        return null;
    }

    findTimeSlot(room: Room, start: Date, end: Date) : boolean {
        for(const meeting of this.meetings) {
            if(meeting.room === room) {
                if(
                    (start >= meeting.start && start <= meeting.end) ||
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
const roomC = new Room("C");

const scheduler = new Scheduler([roomA, roomB, roomC]);
const bookRoom = scheduler.bookMeeting(new Date("2023-12-01T09:00:00"), new Date("2023-12-01T10:00:00"));

if(bookRoom) {
    console.log(`Meeting booked successfully in ${bookRoom}`);
} else {
  console.log("No available room for the specified time slot");
}