class School{
    constructor(name) {
        this.name = name
        this.courses = []
        this.students = []
    }
    addCourse(course) {
        if(this.courses.includes(course)) {
            return
        } else {
            this.courses.push(course)
        }  
    }
    addStudent(student) {
        if(this.students.includes(student)) {
            return
        } else {
            let id = Math.floor(Math.random() * 100) + 1
            while(this.students.some(student => student.getId() == id)) {
                id = Math.floor(Math.random() * 100) + 1
            }
            student.setId(id)
            this.students.push(student)
        }
    }
    addStudentGrade(student, course, grade) {
        if (this.students.includes(student) && this.courses.includes(course)) {
            student.addGrade([course, grade])
            course.addGrade([student, grade]) 
        }
    }
    getStudents() {
        return this.students
    }

    getCourses() {
        return this.courses
    }

    getStudentsOrderedByAverageGrade() {
        for(let i = 0; i <= this.students.length - 1; i ++) {
            if(this.students[i].getAverageGrade() < this.students[i + 1].getAverageGrade()) {
                let help = this.students[i]
                this.students[i] = this.students[i + 1]
                this.students[i + 1] = help
            }
        return this.students
        }
    }
}

module.exports = {School}