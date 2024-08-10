class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

	getName(){
		return this.name;
	}

		setAge(age){
		return this.age = age;
	}
}

class Student extends Person {
   constructor(name, age) {
    super(name, age);
  }
	
  study() {
    console.log(`${this.name} is studying`);
  }
}

class Teacher extends Person {
  constructor(name, age) {
    super(name, age);
  }

  teach() {
    console.log(`${this.name} is teaching`);
  }
}
const person = new Person("John", 30);
// Do not change the code below this line
window.Person = Person;
window.Student = Student;
window.Teacher = Teacher;
