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
    [this.marks = 5, ...marks]; 
    

    
    
    
    
}

Student.prototype.getAverage = function () {
    
}

Student.prototype.exclude = function (reason) {
    this.reason = reason;
}
