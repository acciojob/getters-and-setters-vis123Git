//complete this code
class Person {
	constructor(name, age)
}

class Student extends Person {
	function study(){
		this.name = name;
		console.log(`${this.name} is studying`)
	}
}

class Teacher extends Person {
	function teach(){
		this.name = name;
		console.log(`${this.name} is teaching`)
	}
}

// Do not change the code below this line
window.Person = Person;
window.Student = Student;
window.Teacher = Teacher;
