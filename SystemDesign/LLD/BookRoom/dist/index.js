"use strict";
class Room {
    constructor(name) {
        this.name = name;
        this.booked = false;
    }
}
class Meeting {
    constructor(start, end, room) {
        this.start = start;
        this.end = end;
        this.room = room;
    }
}
class Scheduler {
    constructor(rooms) {
        this.rooms = rooms;
        this.meetings = [];
    }
    bookMeeting(start, end) {
        const availableRoom = this.findAvailableRoom(start, end);
        if (availableRoom) {
            let newMeeting = new Meeting(start, end, availableRoom);
            this.meetings.push(newMeeting);
            availableRoom.booked = true;
            return availableRoom.name;
        }
    }
    findAvailableRoom(start, end) {
        for (const room of this.rooms) {
            if (!room.booked && this.findSlot(room, start, end)) {
                return room;
            }
        }
        return null;
    }
    findSlot(room, start, end) {
        for (const meeting of this.meetings) {
            if (meeting.room.name === room.name) {
                if ((start >= meeting.start && start < meeting.end) ||
                    (end >= meeting.start && end <= meeting.end) ||
                    (start <= meeting.start && end >= meeting.end)) {
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
const bookedMeetingA = scheduler.bookMeeting(new Date('2023-12-06T09:00:00'), new Date('2023-12-06T10:00:00'));
const bookedMeetingB = scheduler.bookMeeting(new Date('2023-12-06T09:00:00'), new Date('2023-12-06T10:00:00'));
const bookedMeetingC = scheduler.bookMeeting(new Date('2023-12-06T09:00:00'), new Date('2023-12-06T10:00:00'));
const bookedMeetingD = scheduler.bookMeeting(new Date('2023-12-06T09:00:00'), new Date('2023-12-06T10:00:00'));
if (bookedMeetingA) {
    console.log("Meeting room booked for - ", bookedMeetingA);
}
else {
    console.log("No slot avalaible.");
}
if (bookedMeetingB) {
    console.log("Meeting room booked for - ", bookedMeetingB);
}
else {
    console.log("No slot avalaible.");
}
if (bookedMeetingC) {
    console.log("Meeting room booked for - ", bookedMeetingC);
}
else {
    console.log("No slot avalaible.");
}
if (bookedMeetingD) {
    console.log("Meeting room booked for - ", bookedMeetingD);
}
else {
    console.log("No slot avalaible.");
}
