/*
🧠 Big Picture (One Line)

    Call Stack executes synchronous code first, then Microtasks, then Callback Queue
    Event Loop, Microtasks, and Callbacks
    Microtasks: Promises and Mutation Observers
    MarcoTasks or Callback Queue: setTimeout, setInterval, DOM events
*/




//synchronous code
console.log("Start");

//Microtask: Promise
Promise.resolve().then(()=>{
    console.log("Inside Promise Microtask");
});

//Microtask: Promise
const promise=new Promise((resolve,reject)=>{
    resolve("Promise Resolved");
});

promise.then((value)=>{
    console.log(value);
})

//MacroTask: setTimeout
setTimeout(()=>{
    console.log("Inside setTimeout Callback");
},0);

//synchronous code
console.log("End");

/*
Expected Output Order:
first synchronous code executes:
console.log("Start");
console.log("End");
then Microtasks execute:
console.log("Inside Promise Microtask");
finally MacroTasks execute:
console.log("Inside setTimeout Callback");

*/

//This is how Event Loop, Microtasks, and Callbacks work together in JavaScript and it keeps repeating the event loop in this manner.