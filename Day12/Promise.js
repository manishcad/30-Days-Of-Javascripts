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