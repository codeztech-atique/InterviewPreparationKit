class Student {
  constructor(public name: string) {}
}

class Course {
  constructor(public title: string) {}
}

// Association: student enrolled in a course
const student = new Student("Atique");
const course = new Course("System Design");
console.log(`${student.name} is enrolled in ${course.title}`);
