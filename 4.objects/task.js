function Student(name, gender, age) {
    this.name = name;
    this.gender = gender;
    this.age = age;
    
}

let student1 = new Student ("Antony", "Male", 21);
student1.setSubject("Algebra");
expect(student1.subject).subjectName("Algebra");
let student2 = new Student ("Rose", "Female", 20);
student2.setSubject("Geometry");
expect(student2.subject).subjectName("Geometry");



Student.prototype.setSubject = function (subjectName) {
    
}

Student.prototype.addMarks = function (...marks) {
    
}

Student.prototype.getAverage = function () {
    
}

Student.prototype.exclude = function (reason) {
    
}
