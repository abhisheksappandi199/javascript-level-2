const person = {
    name : 'steve'
}

// DEEP COPY METHOD 1
const student  =  Object.assign({} , person)

// DEEP COPY METHOD 2
const student = {...person}

console.log(person); // {name : 'steve}
console.log(student);// {name : 'steve}

person.name = 'john'
console.log(person); // {name : 'john}
console.log(student);// {name : 'steve}

student.name = 'jack'
console.log(person); // {name : 'john}
console.log(student);// {name : 'jack}