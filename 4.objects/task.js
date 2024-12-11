function Student(name, gender, age) {
    this.name = name;
    this.gender = gender;
    this.age = age;
    this.marks = [];
    this.setSubject = function(subject) {
        this.subject = subject;
    }
    this.addMarks = function(...marks) {
        this.marks = this.marks;
    }
    this.exclude = function(reason) {
        this.reason = reason;
}
}


let student1 = new Student ("Antony", "Male", 21);
student1.setSubject("Algebra"); 
student1.addMarks(4, 5, 5, 5); 
let student2 = new Student ("Rose", "Female", 20);
student2.setSubject("Geometry");    
student2.exclude('прогулы');
Student.prototype.setSubject = function (subjectName) {
    student1.setSubject(["Algebra"]);
    student2.setSubject(["Geometry"]);
}

Student.prototype.addMarks = function (...marks) {
    student1.marks([]);
    student2.marks([]);
}

Student.prototype.getAverage = function () {
    
}

Student.prototype.exclude = function (reason) {
    
}
