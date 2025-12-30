/* 

- Function declaration vs expression
- Arrow functions & limitations
- Default parameters

Practice:
- Write functions in all styles

---
*/

//How to Declares Functions in javaScript and Calling Functions


SayMyName()//can call before declaring the function due to hoisting
//Function Declaration
function SayMyName(){
    console.log("My name is manish chand Fro Normal Function")
}


//Arrow Functions
try{
    //Calling before declaration
    sayMyNameArrow() //cannot call before declaring the function
}catch(e){
    console.log(e.message)
}

//Arrow Function Declaration
const sayMyNameArrow=()=>{
    console.log("My name is manish chand from arrow function")
}
//Calling after declaration
sayMyNameArrow()


//Functions Are First-Class Citizens
//function can be assign to variables
const greet=function(name){
    console.log("Hello, "+name)
}
greet("Manish Chand")

//function can be passed as arguments to other functions
const outerFunction=function(func,name){
    func(name)
}
//passing function greet as argument to outerFunction
outerFunction(greet,"Manish Chand")


//Basics Arrow Function Syntax
const SumArrowFunction=(a,b)=>a+b
console.log("Sum of 3 and 5 is:",SumArrowFunction(3,5))
//Single Parameter
const cube=x=>x*x*x
console.log("Cube of 3 is:",cube(3))
//Multiple Lines in Arrow Function
const MultipleLinesFunction=(a,b)=>{
    const sum=a+b
    const product=a*b
    return `Sum is ${sum} and Product is ${product}`
}

console.log(MultipleLinesFunction(3,5))