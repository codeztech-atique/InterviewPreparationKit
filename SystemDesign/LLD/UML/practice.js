"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
var Course = /** @class */ (function () {
    function Course(title) {
        this.title = title;
    }
    return Course;
}());
var Student = /** @class */ (function () {
    function Student(name, course) {
        this.name = name;
        this.course = course;
    }
    Student.prototype.enroll = function (c) {
        this.course = c;
    };
    return Student;
}());
var student = new Student("Atique");
var course = new Course("System Design");
student.enroll(course);
console.log("".concat(student.name, " is enrolled in ").concat((_a = student.course) === null || _a === void 0 ? void 0 : _a.title));
