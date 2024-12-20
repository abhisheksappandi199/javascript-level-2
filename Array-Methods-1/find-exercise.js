// 1. find thr fst even number greater than 20

const numbers = [10,15,21,24,30,40]

const result = numbers.find(e => e%2 === 0 && e > 20)
console.log(result);

//  2. use find methos wn : if u r finding a element based on the condition  , else use INCLUDES OR INDEXOF
// INCLUDES OR INDEXOF works only on arrays (primitive types)

// 3. find element , based on property
const user = [ {id : 1,name : 'john'} , {id :2 , name : 'steve'}]
const result = user.find(e => e.id === 20) 
console.log(result);  // undefined