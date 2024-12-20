// every : returns true if at least one element in arr passes the given condition . Otherwise returns false

// ex : check  the numbers in arr contaims even no
const price = [125,175,200,255]

const result = price.some(e => e%2 === 0)
console.log(result);