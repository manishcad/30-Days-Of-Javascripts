/*
### Day 7 – `this` Keyword
- Global vs object vs function
- Arrow function behavior
- call, apply, bind

Practice:
- Fix broken `this` examples
*/

// 1. Global Context
this.name="manish"
console.log("Global Context:", this); // In browsers, this refers to the window object or global object in Node.js
console.log("Accessing name from global this:", this.name); // "manish"

// 2. Object Context
const person={
    name:"chand",
    greet:function(){
        console.log("Object Context:", this); // Refers to the person object
        console.log("Hello, "+this.name); // "Hello, chand"
    }
}
person.greet()

// 3. Function Context
function showThis(){
    this.name="anonymous"
    //console.log("Function Context:", this); // In non-strict mode, refers to global object; in strict mode, undefined
}
showThis()

// 4. Arrow Function Context
const arrowFunctionContext = () => {
    console.log("Arrow Function Context:", this); // In arrow functions, `this` is lexically bound to the enclosing scope
};
arrowFunctionContext();

// 5. Using call, apply, bind
const user={
    name:"bindUser"
}
const anotherUser={
    name:"callApplyUser"
}   
function introduce(greeting){
    console.log(greeting + ", " + this.name);
}
// Using call
introduce.call(anotherUser, "Hi"); // "Hi, callApplyUser"
// Using apply
introduce.apply(anotherUser, ["Hello"]); // "Hello, callApplyUser"
// Using bind
const boundIntroduce = introduce.bind(user, "Hey");
boundIntroduce(); // "Hey, bindUser"