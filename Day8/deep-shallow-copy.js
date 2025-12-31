// Deep vs Shallow Copy in JavaScript
// Shallow Copy: Creates a new object but copies references of nested objects
// Deep Copy: Creates a new object and recursively copies all nested objects

//primitive types easy to copy and it does not create any reference issues
let name="manish"
let newName=name // Primitive types are copied by value and (Safe)
newName="Sandeep"
console.log(newName)
console.log(name)

// Shallow Copy Example in reference types
let arr=[1,2,3,4]
let shallowCopyArr=arr // Copies the reference (Not Safe)
shallowCopyArr.push(5)
console.log("Original Array after modifying shallow copy:",arr) // Original array is affected
console.log("Shallow Copy Array:",shallowCopyArr)

// this is also a shallow copy but it looks like a deep copy because we are using spread operator and its only effective for one level deep
let shalowCopyArray=[...arr] // Using spread operator for shallow copy of array
shalowCopyArray.push(10)
console.log("Original Array after modifying shallow copy:",arr) // Original array is not affected
console.log("Shallow Copy Array:",shalowCopyArray)

// Deep Copy
const deepCopy=structuredClone(arr) // Using structuredClone for deep copy
deepCopy.push(20)
console.log("Original Array after modifying deep copy:",arr) // Original array is not affected
console.log("Deep Copy Array:",deepCopy)