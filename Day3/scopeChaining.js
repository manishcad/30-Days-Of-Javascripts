/* 
Scope Chaining in JavaScript
1. Global Scope
2. Function Scope
3. Block Scope
4. Lexical Scope

*/

//Lexical scope means scope is decided by where code is written, not where it is executed.

// a is a global variable
let a=10

function secondFunction(){
    // b is a function scope variable
    console.log("Inside Second Function:",a) //Accessible Here
    let b=20
    function thirdFunction(){
        // c is a block scope variable or local scope variable
        let c=30
        console.log("Inside Third Function:",a,b,c) //Accessible Here
    }
    thirdFunction()
}

secondFunction()