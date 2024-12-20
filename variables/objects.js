/////////////////////////////////////////////////// shallow copy   ////////////////////////////////////////////////
let a = [10]
let b = ['apple']
console.log("a",a); // [10]
console.log('b',b); // ['apple']

//copy reference of a into c
let c = a
console.log("a",a); // [10]
console.log('c',c); // [10]

a.push(20)
console.log("a",a); // [10,20]
console.log('c',c); // [10,20]

c.push(30)
console.log("a",a); // [10,20,30]
console.log('c',c); // [10,20,30]
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// non - Primitives
// 1. shallow copy - multiple variables are pointing the same memory address
//         (certain values are still connected to the original variables)
// 2. deep copy  -
//          (all of the new variables are copied and disconnected from the original variablees)

// DEEP COPY (ARRAY)
// a.slice
// b. concat
// c. spread operator
// d. JSON.stringify() + JSON.parse()

// DEEP COPY (OBJECTS)
// a. object.assign
// c. spread operator
// d. JSON.stringify() + JSON.parse(