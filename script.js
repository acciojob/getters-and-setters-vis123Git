class Person {
  constructor(name, age) {
    this._name = name;
    this._age = age;
  }

  get name() {
    return this._name;
  }

  set age(age) {
    this._age = age;
  }
}

class Student extends Person {
  constructor(name, age) {
    super(name, age);
  }
	
  study() {
    console.log(`${this._name} is studying`);
  }
}

class Teacher extends Person {
  constructor(name, age) {
    super(name, age);
  }

  teach() {
    console.log(`${this._name} is teaching`);
  }
}

const person = new Person("John", 30);
const student = new Student("Alice", 22);
const teacher = new Teacher("Bob", 40);

// Do not change the code below this line
window.Person = Person;
window.Student = Student;
window.Teacher = Teacher;