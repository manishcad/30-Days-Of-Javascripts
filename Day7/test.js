
this.name="manish"
console.log(this.name)//this refers to the global object in non-strict mode

//Function has thier own this context
function testThis() {
    this.name="Sandeep"
    console.log(this.name)
}
testThis()

const arrowFunc ={
    name:"manish",
    greet:function(){
        console.log(this.name)
    },
    arrowGreet:()=>{
        console.log("Hello from arrow "+this.name)
    },


}
function outerFunc(){
    this.name="Rahul"
    const arrow=()=>{
        this.name="aniket"
        console.log(this)
    }
    arrow()
}
arrowFunc.greet()
arrowFunc.arrowGreet()
outerFunc()