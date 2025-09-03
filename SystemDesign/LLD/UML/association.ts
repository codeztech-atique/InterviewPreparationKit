export {};
class Student {
  constructor(public name: string, public course?: Course) {}
  enroll(c: Course) { 
    this.course = c; 
  }
}

class Course {
  constructor(public title: string) {}
}


// Association: student enrolled in a course
const student = new Student("Atique");
const course = new Course("System Design");
student.enroll(course); // <-- creates the association

console.log(`${student.name} is enrolled in ${student.course?.title}`);