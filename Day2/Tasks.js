add(1,2);
function add(a,b){
    console.log("Sum is:",a+b)
}

try{
    subtraction(1,2);

}catch(e){
    console.log(e.message)
}
const subtraction=(a,b)=>{
    console.log("Subtraction is:",a-b)
}

//FIx The Bug
const counter = {
  count: 0,
  increment: () => {
    this.count++;
  }
};

counter.increment();
console.log(counter.count);

//Fixed Code
const fixedCounter={


    count:5,
    increment:function(){
        this.count++;
    }

}

fixedCounter.increment();
console.log(fixedCounter.count);