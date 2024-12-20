// find - returns the value of first elem that satisfies the given condition . otherwise UNDEFINED is returned.

const price = [ 10 ,20 ,30 ,40]
// predicate function - fn that returns true or false

const result = price.find(e => e > 250)
console.log(result);