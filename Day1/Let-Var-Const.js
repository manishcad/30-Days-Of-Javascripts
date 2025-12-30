//The Difference between let var const in JavaScript
/*
In JavaScript, let, var, and const are used to declare variables, but they have different scopes and behaviors:

var: It is function-scoped, meaning it is accessible within the function it is declared in. Variables declared with var can be redeclared and updated. However, var declarations are hoisted to the top of their scope, which can lead to unexpected behavior.

let: It is block-scoped, meaning it is only accessible within the block (enclosed by curly braces {}) it is declared in. Variables declared with let can be updated but cannot be redeclared within the same scope. let declarations are also hoisted, but not initialized, so accessing them before declaration results in a ReferenceError.
const: It is also block-scoped like let. Variables declared with const cannot be updated or redeclared. They must be initialized at the time of declaration. However, if a const variable holds an object or array, the contents of the object or array can be modified, but the variable itself cannot be reassigned to a different object or array.

Example:
*/
// Using var
function varExample() {
    var x = 10;
    if(true){
        var x = 20; // same variable
        console.log(x); // 20
    }
    console.log(x); // 20
}
//varExample();

// Using let    
function letExpample(){
    let y=10;
    if(true){
        let y=20; // different variable
        console.log(y); // 20
    }
    console.log(y); // 10
}
//letExpample();

// Using const
function constExample(){
    const z=10;
    // z=20; // Error: Assignment to constant variable.
    console.log(z); // 10
    const arr = [1, 2, 3];
    arr.push(4); // Allowed: modifying contents of the array
    console.log(arr); // [1, 2, 3, 4]
}
//constExample();

// Some tricky examples to understand the differences
console.log("Hoisting with var:", hoistedVar); // undefined
var hoistedVar = 5;

try{

    console.log("Hoisting with let:", hoistedLet); // ReferenceError        
}
catch(e){
    console.log("Hoisting with let:", e.message);
}
let hoistedLet = 10;
try{

    console.log("Hoisting with const:", hoistedConst); // ReferenceError        
}catch(e){
    console.log("Hoisting with const:", e.message);
}
const hoistedConst = 15;


//Loop and Scope Example
for(var i=0;i<3;i++){
    console.log("var loop i:",i); // 0,1,2
    setTimeout(()=>{
        console.log("var loop after timeout i:",i); // 3,3,3
    },0)
}
for(let i=0;i<3;i++){
    console.log("let loop i:",i); // 0,1,2
    setTimeout(()=>{
        console.log("let loop after timeout i:",i); // 0,1,2
    })
}

