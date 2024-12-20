let a = [10]
let c = a.slice(0) // DEEP COPY MATHOD 1
// here a and c are disconnecte

// DEEP COPY MATHOD 2
let c = [].concat(a)

// DEEP COPY MATHOD 3
let c = [...a]  

console.log('a',a); // [10]
console.log('c',c); // [10]

a.push(20)
console.log('a',a); // [10,20]
console.log('c',c); // [10]