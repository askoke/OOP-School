const {Person} = require('./Person')

class Student extends Person{
    constructor(name) {
        super(name)
        this.name = name
        this.id = null
        this.grades = []
    }
    setId(id) {
        if(this.id === null) {
            this.id = id
        }
    }
    getId() {
        return this.id
    }
    getGrades() {
        return this.grades
    }
    addGrade(grade) {
        this.grades.push(grade)
    }
    getAverageGrade(grade) {
        let average = -1;
        if (this.grades.length > 0) {
            const total = this.grades.reduce((sum, grade) => sum + grade[1], 0);
            average = total / this.grades.length;
        }
        return average;
    }
    description() {
        return `${this.name}`
    }
}

module.exports = {Student}