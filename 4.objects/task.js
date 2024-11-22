function Student(name, gender, age) {
  let student1 = new Student("Antony", "male", 21);
  let student2 = new Student("Rose", "female", 20);
  

}

Student.prototype.setSubject = function (subjectName) {
    student1.setSubject("English language");
    console.log(student1.getAverage());
    student2.setSubject("Geometry");
}

Student.prototype.addMarks = function (...marks) {
    student1.addMarks(4, 5, 4, 5);
}

Student.prototype.getAverage = function () {
    console.log(student1.getAverage());
    console.log(student1);
}

Student.prototype.exclude = function (reason) {
    student2.exclude('плохая учеба');
    console.log(student2)
}
