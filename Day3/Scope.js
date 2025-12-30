/** 
    * This file is part of Day3 project.
    * © 2025 Day3 Contributors

  ### Day 3 – Scope & Hoisting
- Global, function, block scope
- Hoisting
- Temporal Dead Zone


 */

//What is Scope in JavaScript?
//Scope determines the accessibility of variables, functions, and objects in some particular part of your code during runtime.
//Types of Scope in JavaScript
//1. Global Scope
//2. Function Scope
//3. Block Scope


//Example of Global Scope
let globalVar="I am Global Variable"
function globalScopeExample(){
    console.log(globalVar,"accesing from function Scope") //Accessible Here
    if(true){
        console.log(globalVar,"accesing from Block Scope") //Accessible Here
    }
}
globalScopeExample()
console.log(globalVar) //Accessible Here


//Example of Function Scope
function functionScopeExample(){
    var name="Manish Chand"
    console.log("Inside Function Scope:",name) //Accessible Here
}
functionScopeExample()
try{
    //Cannot access name outside function scope
    console.log("Outside Function Scope:",name) //Not Accessible Here
}catch(e){
    console.log(e.message)
}

//Example of Block Scope
function blockScopeExample(){
    if(true){
        let age=25
        var name="Manish Chand"
        console.log("Inside Block Scope:",age) //Accessible Here
    }
    try{
        console.log("Outside Block Scope:",name) //Accessible Here But Not Recommended & Dangerous
        //Cannot access age outside block scope
        console.log("Outside Block Scope:",age) //Not Accessible Here
    }catch(e){
        console.log("Outside Block Scope Error:",e.message)
    }

}
blockScopeExample()

/* 
JavaScript uses lexical scoping
Scope is decided where code is written, not where it is called
*/
//Lexical Scope in JavaScript
function outerFunction(){
    let outerVar="I am from Outer Function"
    function innerFunction(){
        console.log(outerVar,"Accessing from Inner Function") //Accessible Here
    }
    innerFunction()
}
outerFunction()