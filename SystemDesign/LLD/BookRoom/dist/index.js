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
            const newMeeting = new Meeting(start, end, availableRoom);
            this.meetings.push(newMeeting);
            availableRoom.booked = true;
            return availableRoom.name;
        }
        return null;
    }
    findAvailableRoom(start, end) {
        for (const room of this.rooms) {
            if (!room.booked && this.findTimeSlot(room, start, end)) {
                return room;
            }
        }
        return null;
    }
    findTimeSlot(room, start, end) {
        for (const meeting of this.meetings) {
            if (meeting.room === room) {
                if ((start >= meeting.start && start <= meeting.end) ||
                    (end > meeting.start && end <= meeting.end) ||
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
const bookRoom = scheduler.bookMeeting(new Date("2023-12-01T09:00:00"), new Date("2023-12-01T10:00:00"));
if (bookRoom) {
    console.log(`Meeting booked successfully in ${bookRoom}`);
}
else {
    console.log("No available room for the specified time slot");
}
