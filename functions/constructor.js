function User(fName, lName) { // it has to be Cap (practice)
    // this = {}     // implicitly
    this.firstName = fName
    this.lastName = lName
    this.isAdmin = false
    this.fullName = function(){
        return `${this.firstName} ${this.lastName}`
    }
    this.details = function(){
        return `${this.firstName} - admin (${this.isAdmin})`
    }
    // return this   // implicitly
}

const user1 = new User('abhi','S')  // if u remove new keyword : it becomes normal function
console.log(user1);
// user1.firstName = 'abhsiehk'
// console.log(user1.firstName);
console.log(user1.fullName());
console.log(user1.details());

const user2 = new User('raghu','G')  // if u remove new keyword : it becomes normal function
console.log(user2);