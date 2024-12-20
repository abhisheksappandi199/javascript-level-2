const numbers = [10,15,20,25]

// add 2 every element
const r1 = numbers.map(e => e+2)
console.log(r1);

// add 2 to even and add 3 to the odd number
const r2 = numbers.map(e => e%2 === 0 ? e+2 : e+3 )
console.log(r2);

// add 5 if ele is even
const r3 = numbers.map(e => e%2 === 0 ? e+5 : e)
console.log(r3);

// return a ibj with apple as key and its len as value
const fruits = ['apple','mango','kiwi']
const r4 = fruits.map(e => {
    return { [e] : e.length }
})
console.log(r4);