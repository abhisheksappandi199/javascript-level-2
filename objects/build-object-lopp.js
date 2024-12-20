const fruits = ['apple','mango','kiwi']

const r4 = fruits.map(e => {
    return { [e] : e.length }
})
console.log(r4);


const obj = {}
const result = fruits.map(function(e){
     obj[e]  = e.length
})
console.log(obj);