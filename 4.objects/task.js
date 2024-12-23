function Student(name, gender, age) {
    this.name = name;
    this.gender = gender;
    this.age = age;
    this.marks = [];
    
}



let student1 = new Student ("Antony", "Male", 21);
    
let student2 = new Student ("Rose", "Female", 20);



Student.prototype.setSubject = function (subjectName) {
    this.subject = subjectName;
    
}

Student.prototype.addMarks = function (...marks) {
    this.marks = marks[[5], [4, 4], [3, 3, 4, 5]];
    marks[0];
    marks[1];
    marks[3];
    
    
    
    
    
    
    
}

Student.prototype.getAverage = function () {
    
}

Student.prototype.exclude = function (reason) {
    this.reason = reason;
}
