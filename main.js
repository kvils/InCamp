class University {

    constructor(name) {
        this.name = name;
        this._students = [];
    }

    addStudent(student) {
        this._students.push(student);
    }

    get students() {
        return this._students;
    }

    set students(value) {
        this._students = value;
    }
}

class Intership extends University{
    constructor(name) {
        super(name);
        this.minLevel = 3;
    }

    inviteStudents (university) {

        console.log('students', university._student);

        // university
        //     .students
        //     .filter(student => student.knowledge.level >= this.minLevel)
        //     .forEach(student => {
        //         if (!this._students.includes(student)) {
        //             this._students.push(student)
        //         }
        //     });
    }

    getStudents() {
        return this.students.join('\n')
    }
}

class Knowledge {
    constructor(level) {
        this._level = level;
    }

    get level() {
        return this._level
    }
}

class Student {
    constructor(name, level=0) {
        this._name = name;
        this._knowledge = new Knowledge(level);
    }

    set knowledge(value) {
        this._knowledge = value;
    }

    get knowledge() {
        return this._knowledge;
    }

    get name() {
        return this._name;
    }
}


let CHSBC = new University('CHSBC');
// let CHNU = new University('CHNU');
// let CHDTU = new University('CHDTU');

CHSBC.addStudent(new Student('Anton Rohozhnikov', 5));
CHSBC.addStudent(new Student('Anton Rohozhnikov', 6));
CHSBC.addStudent(new Student('Anton Rohozhnikov', 7));

// CHNU.addStudent(new Student("Andrew Kostenko", 4));

// CHDTU.addStudent(new Student("Maria Petrenko", 3));
// CHDTU.addStudent(new Student("Maria Petrenko", 3));

let intership = new Intership('InCamp');
intership.inviteStudents(CHSBC, this);
// intership.inviteStudents(CHNU);
// intership.inviteStudents(CHDTU);

// console.log("List of internship's students:");
// console.log(intership.getStudents());