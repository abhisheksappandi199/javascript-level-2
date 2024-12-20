const numbers = [10,20,30,40,50]

// the function that take another fn as a argument is called as hof
// the fn that is passed as argument is called as a callback 

//numbers.forEach(e => console.log(e))

function myforEach(arr , callbackfun){
    for(let i = 0; i < arr.length ; i++){
        callbackfun(arr[i])
    }
}

myforEach(numbers , function(n){
    console.log(n)
})

// any function that returns true or false called as predicate function.
function myfilter(arr ,callback) {
    const result = []
    for(let i=0; i < arr.length ; i++){
        const bool = callback(arr[i])
        if(bool){
            result.push(arr[i])
        }
    }
    return result
}

const result = myfilter(numbers , function(n){
    return n % 2 == 0
})

console.log(result);

/// whenever u want to create a obj of certain type wh have common properties and methods 
//          then use constructor functions
