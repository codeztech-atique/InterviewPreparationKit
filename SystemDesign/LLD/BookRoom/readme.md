Goal(s) of the system

■ Book a room for the meeting and return the name of the room booked
■ History of the meetings booked

Write an API which accepts a start time and an end time, and returns the
meeting room name for the booked scheduled time


Class - 

Room
{
    name: string
    book: bool
}

Meeting
{
    start: date
    end: date
    room: Room
}

Scheduler {
    Book a meeting from scheduler class
}

