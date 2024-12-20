// False
console.log( 0 , Boolean(0)); // false
console.log( undefined , Boolean(undefined)); // false
console.log( null , Boolean(null)); // false
console.log( NaN , Boolean(NaN)); // false
console.log( '' , Boolean('')); // false
console.log( false , Boolean(false)); // false

// TRUE
console.log(1 , Boolean(1)); // true
console.log(-1 , Boolean(-1)); // true
console.log('dct' , Boolean('dct')); // true
console.log([] , Boolean([])); // true
console.log({} , Boolean({})); // true
console.log(true , Boolean(true)); // true
