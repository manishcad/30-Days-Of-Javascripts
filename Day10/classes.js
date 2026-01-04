//class are syntatic sugar the help us to create a blueprint for an object
//classes are not hoisted like functions
// Example of a simple class in JavaScript
class Person{
    //constructor method to initialize object properties
    constructor(name){
        this.name=name;
    }
    greet(){
        console.log(`Hello, my name is ${this.name}`);
    }
}


// Creating an instance of the Person class
const person=new Person("Manish")
//calling method of the class
person.greet(); // Hello, my name is Manish

// Example of Inheritance in JavaScript Classes
class Employee extends Person{
    constructor(name,position){
        //super to call parent class constructor
        super(name); //calling parent class constructor
        this.position=position;
    }
    info(){
        console.log(`I am ${this.name} and I work as a ${this.position}`);
    }
}

const employee=new Employee("Manish","Developer");
employee.greet();
employee.info();
