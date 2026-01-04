// Day11/callback.js
// Callback function example
// A callback function is a function passed into another function as an argument
// which is then invoked inside the outer function to complete some kind of routine or action.

function greet(name,callback){
    callback(name)
}

function callback(name){
    console.log("Hello " + name)
}

greet("manish",callback)


//Passing a call back function directly
greet("Sandeep",(name)=>{
    console.log(name)
    sayGoodbye(name,()=>{
        console.log("Goodbye "+ name)
    })
})

function sayGoodbye(name,callback){
    callback(name)
}