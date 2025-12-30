/*
  ### Day 4 – Execution Context & Call Stack
- Execution context lifecycle
- Call stack

Practice:
- Trace nested function calls


1️⃣ What Is an Execution Context?

An execution context is an environment where JavaScript code is evaluated and executed.

There are 3 types:

Global Execution Context (GEC)

Function Execution Context (FEC)

Eval Execution Context (rare, ignore)
*/ 

// Example of Global Execution Context
let globalVar = "I am a global variable";   
function globalFunction() {
    console.log(globalVar); // Accessible here
}
globalFunction();

// Example of Function Execution Context
function outerFunction() {
    let outerVar = "I am from outer function";
    function innerFunction() {
        console.log(outerVar); // Accessible here
    }
    innerFunction();
}
outerFunction();

// Example of Eval Execution Context
let evalCode = 'console.log("I am inside eval");';
eval(evalCode); // Not recommended to use eval

/*
2️⃣ What Is a Call Stack? 
The call stack is a data structure that keeps track of function calls in a program. It follows the Last In, First Out (LIFO) principle.

When a function is called, a new execution context is created and pushed onto the call stack. When the function completes, its execution context is popped off the stack.
function firstFunction() {
    console.log("Inside First Function");
    secondFunction();
}
function secondFunction() {
    console.log("Inside Second Function");
}
firstFunction();
*/ 

/*
Practice: Trace the function calls and their execution contexts in the call stack.
*/
function traceFunctionA() {
    console.log("Inside Function A");
    traceFunctionB();
}
function traceFunctionB() {
    console.log("Inside Function B");
    traceFunctionC();
}
function traceFunctionC() {
    console.log("Inside Function C");
}
traceFunctionA();   
