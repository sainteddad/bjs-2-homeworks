function Student(name, gender, age) {
    this.name = name;
    this.gender = gender;
    this.age = age;
}

let student1 = new Student ("Antony", "Male", 21);
student1.subjectName("Algebra");
student1.marks(...4, 5, 4, 5);
let student2 = new Student ("Rose", "Female", 20);
student2.subjectName("Geometry");
student2.marks();
student2.exclude('плохая учёба')


Student.prototype.setSubject = function (subjectName) {
    
}

Student.prototype.addMarks = function (...marks) {
    
}

Student.prototype.getAverage = function () {
    
}

Student.prototype.exclude = function (reason) {
    
}
