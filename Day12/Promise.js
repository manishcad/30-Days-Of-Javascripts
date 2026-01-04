//Creating a Promise
const promise = new Promise((resolve,reject)=>{
    //Simulating an async operation using setTimeout
    setTimeout(()=>{
        console.log("Hello")
    },2000)})


function greet(name,callback){
    return new Promise((resolve)=>{
        console.log("Hello " + name )
        resolve(name)
    })
}
//Chaining Promises
greet("Manish").then((name)=>{
    console.log("Goodbye "+name)
    return name
}).then((name)=>{
    console.log("Have a great day "+name)
})