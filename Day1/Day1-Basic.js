/*
- Data types (primitive vs reference)
- let, const, var
- Type coercion
- == vs ===

Practice:
- typeof null
- [] + {}
- {} + []

---
*/

// Primitive Data Types
let number = 42;               // Number
let string = "Hello, World!"; // String
let boolean = true;           // Boolean
let undefinedVar;             // Undefined
let nullVar = null;          // Null
let symbol = Symbol("id");
let bigInt = 9007199254740991n; // BigInt

// Reference Data Types
let array = [1, 2, 3];       // Array
let object = { key: "value" }; // Object
let func = function() { return "I am a function"; }; // Function
let date = new Date();       // Date
let regex = /ab+c/;          // Regular Expression

// Variable Declarations
var oldVar = "I am var";     // Function-scoped, can be redeclared
let blockVar = "I am let";   //
const constVar = "I am const"; // Block-scoped, cannot be reassigned

// Type Coercion Examples
let coercedString = "5" + 10; // "510" (number 10 is coerced to string)
let coercedNumber = "5" - 2;   // 3 (string "5" is coerced to number)
let coercedBoolean = 1 + true; // 2 (true is coerced to 1)

// Equality Operators
let looseEquality = (5 == "5");   // true (type coercion occurs)
let strictEquality = (5 === "5");  // false (no type coercion)

// Practice Outputs
console.log("typeof NAN:", typeof NaN); // "object"
console.log("typeof NAN:", NaN === NaN); // "object"
console.log("[] + {}:", [] + {}); // "[object Object]"
console.log("[] == []:", [] == []);
console.log("{} == {}:", {} == {});

// Practice Output For Reference Data Types
let arr1 = [1];
let arr2 = [1];
console.log("arr1 == arr2:", arr1 === arr2); // false

let obj1 = { a: 1 };
let obj2 = { a: 1 };
console.log("obj1 == obj2:", obj1 === obj2); // false


// Random Practice
//both variables point to the same array in memory
//Shallow Copy Example
const newArray=[1,2,3];
const duplicateArray=newArray;
duplicateArray.push(4);
console.log(newArray);
console.log(duplicateArray);

//Deep Copy Example
const originalArray=[5,6,7];
const deepCopiedArray=[...originalArray];
deepCopiedArray.push(8);
console.log(originalArray);
console.log(deepCopiedArray);