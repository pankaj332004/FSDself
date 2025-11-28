class Person{
    constructor(name , age){
        console.log("Person class Constructor")
        this.name=name;
        this.age=age;
    }
    talk(){
        console.log(`Hii , I am ${this.name}`);
    }
}
class Student extends Person{
    constructor(name ,age , marks){
        console.log("Student class constructor")
        super(name,age); // parent class constructor is being called
        this.marks=marks;
    }
    
}

class Teacher extends Person{
    constructor(subject){
        super(name,age);// parent class constructor is being called
        this.subject = subject;
    }
}

let stu1 = new Student("Pankaj",22,95);
