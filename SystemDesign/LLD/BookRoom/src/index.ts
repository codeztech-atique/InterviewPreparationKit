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
        const availableRoom = this.isRoomAvailable(start, end);
        if(availableRoom) {
            let newMeeting = new Meeting(start, end, availableRoom);
            this.meetings.push(newMeeting);
            availableRoom.booked = true;
            return availableRoom.name;
        }
        return null;
    }

    isRoomAvailable(start: Date, end: Date) : Room | null {
       for(let room of this.rooms) {
          if(!room.booked && this.isSlotAvailable(room, start, end)) {
            return room;
          }
       }  
       return null;
    }

    isSlotAvailable(room: Room, start: Date, end: Date): boolean {
       for(const meeting of this.meetings) {
          if(
            (start >= meeting.start && start < meeting.end) ||
            (end > meeting.start && end <= meeting.end) ||
            (start <= meeting.start && end >= meeting.end)
          ) {
            return false;
          }
       } 
       return true;
    }
}

const roomA = new Room("A");
const roomB = new Room("B");
const roomC = new Room("C");

const schduler = new Scheduler([roomA, roomB, roomC]);
const bookedMeetingA = schduler.bookMeeting(new Date("2023-12-01T09:00:00"), new Date("2023-12-01T10:00:00"));

if(bookedMeetingA) {
    console.log("Meeting booked successfully in ", bookedMeetingA);
} else {
    console.log("Meeting did not bookd.")
}

const bookedMeetingB = schduler.bookMeeting(new Date("2023-12-01T011:00:00"), new Date("2023-12-01T12:00:00"));

if(bookedMeetingB) {
    console.log("Meeting booked successfully in ", bookedMeetingB);
} else {
    console.log("Meeting did not bookd.")
}
