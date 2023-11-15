class Course{
    constructor(name) {
        this.name = name
        this.grades = []
	}
    addGrade(grade) {
        this.grades.push(grade)
    }
    getGrades() {
        return this.grades
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

module.exports = {Course}