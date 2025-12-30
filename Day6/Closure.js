/*
### Day 5 – Closures 🔥
- Lexical scope
- Practical use cases

Practice:
- Counter using closure
- Private variable pattern

*/

//What is Closure in JavaScript?
//A closure is a feature in JavaScript where an inner function has access to the outer (enclosing) function's variables— a scope chain.
//The closure has three scope chains:
//1. It has access to its own scope (variables defined between its curly brackets)
//2. It has access to the outer function's variables
//3. It has access to the global variables
function outerFunction(){
    let x=0
    function innerFunction(){
        x++
        console.log("Value of x:",x)
    }
    return innerFunction
}

const count=outerFunction()
const count1=outerFunction()
count() // Value of x: 11
count() // Value of x: 12
count() // Value of x: 13
count1() // Value of x: 11