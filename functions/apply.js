const person = { firstname : 'steve' , lastname : ' adams'}

function greet(msg, sign) {
    console.log(this);
    console.log(`${msg} , ${sign} ${this.firstname}`)
}

//greet('hi)
greet.apply(person, ['hi','Mr'])