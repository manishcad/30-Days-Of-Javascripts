fetchData()

//sync code
//Everything runs in sequence or line by line
console.log("Start of Sync Code");

function syncTask(){
    console.log("Executing Sync Task");
}
syncTask()
console.log("End of Sync Code");

//async code
//Some tasks may take time to complete and we don't want to block the main thread
console.log("Start of Async Code");
//These are Marco Tasks
function asyncTask(){
    setTimeout(()=>{
        console.log("Executing Async Task after 2 seconds");
    },2000) }

asyncTask()
console.log("End of Async Code");
//Microtasks
Promise.resolve().then(()=>{
    console.log("This is a microtask executed after the current sync code");
});
//async functions with Promises
async function fetchData(){
    //Promises are microtasks that represent a value that may be available now, later, or never
    const promise=new Promise((resolve,reject)=>{
        resolve("Data fetched successfully")
    })
    const result=await promise
    console.log(result)
}

    