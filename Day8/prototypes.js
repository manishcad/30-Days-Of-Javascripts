/*
Day 8 – Objects Deep Dive
- Object methods
- Property descriptors
- Shallow vs deep copy
*/

// Prototypes in JavaScript

// Every function in JavaScript has a prototype property
// which is used to build new objects using that function as a constructor.

function Person(name){
     this.name=name
}
// Adding a method to the prototype of greet function
//Writing creates a new property
Person.prototype.sayGoodbye=function(){
    console.log("Goodbye, "+this.name)
}
// Creating new objects using the Person constructor
const person1=new Person("Manish")
const person2=new Person("Sandeep")
//calling the method from prototype
person1.sayGoodbye()
//Reading follows the prototype chain
person2.sayGoodbye()
