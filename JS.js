var fullName = function() {
    return this.name + ' ' + this.surname;
}

var gradesAvarage = function() {
    var sum = 0;

    for (var i = 0; i < this.grades.length; i++) {
        sum = sum + this.grades[i];
    }

    return (sum / this.grades.length).toFixed(2);
}

var Student = function(name, surname, grades) {
    this.name = name;
    this.surname = surname;
    this.gradesAvarage = gradesAvarage;
    this.fullName = fullName;
    this.grades = grades;

    if (!Student.group) {
        Student.group = [this];
    } else {
        Student.group.push(this);
    }

    Student.group.sort(function(a, b) {
        var a = gradesAvarage.call(a),
            b = gradesAvarage.call(b);

        if (a < b) {
            return 1;
        }
        if (a > b) {
            return -1;
        }
        return 0;
    });
    Student.bestStudent = Student.group[0];


    Student.showAllStudents = function() {
        var allStudents = [];

        for (var i = 0; i < Student.group.length; i++) {
            var student = Student.group[i];

            allStudents.push(
                fullName.call(student) +
                ". Середній бал = " +
                gradesAvarage.call(student)
            );
        }

        return allStudents;
    };

    Student.showBestStudent = function() {
        return fullName.call(Student.bestStudent) +
            " - кращий студент курсу. Середній бал = " +
            gradesAvarage.call(Student.bestStudent);
    }

};

//Через прототип:
// Student.prototype.fullName = function() {
//     return this.name + ' ' + this.surname;
// }

// Student.prototype.gradesAvarage  = function() {
//     var sum = 0;

//     for (var i = 0; i < this.grades.length; i++) {
//         sum = sum + this.grades[i];
//     }

//     return (sum / this.grades.length).toFixed(2);
// }

var student1 = new Student('Taras', 'Tarasenko', [3,5,5]);
console.log(student1);

var student2 = new Student('John', 'Wilson', [5,5,4]);
console.log(student2);

var student3 = new Student('Kira', 'Mountain', [4,3,4]);
console.log(student3);

console.log(student2.gradesAvarage ());
console.log(Student.group);
console.log(Student.showAllStudents());
console.log (Student.showBestStudent());
console.log (Student.bestStudent);