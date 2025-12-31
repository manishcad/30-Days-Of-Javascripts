// Hoisting in JavaScript

// Hoisting is JavaScript's default behavior of moving declarations to the top
// of the current scope (to the top of the current script or the current function).

// a is hoisted at the top because we use var keyword and initialized with undefined
console.log(a)
//
try{

    console.log(b)// b is not hoisted because we use let keyword and it is in temporal dead zone(it is hoisted but in TMZ so we cannot access it before initialization)
}catch(e){
    console.log(e.message)
}

//normal function is fully hoisted and can be called before its declaration
greet()
try{

    arrowFunc()
}catch(e){
    console.log(e.message)
}
var a=10
let b=20
console.log(a)
console.log(b)

// Function declarations are fully hoisted
function greet(){
    console.log("Hello, World!")
}

//Arrow functions are not hoisted
const arrowFunc=()=>{
    console.log("Hello from arrow function")
}

var greet=()=>{
    console.log("Hello from arrow function assigned to var")
}    
// Now this greet is an arrow function assigned to var and it will override the previous function declaration
greet()