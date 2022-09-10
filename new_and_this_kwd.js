//The new operator lets developers create an instance of a user-defined object type or of one of the built-in object types that has a constructor function.



var User = function(firstName,age,email){
    this.FirstName= firstName;
    this.Age= age;
    this.Email= email;
}

// var User1 = User("Tejal", 20, "sakoretejal@gmail.com")
// console.log(User1)                                       undefined output

var User1 = new User("Tejal", 20, "sakoretejal@gmail.com")
var User2 = new User("Tanay", 25, "tanay@gmail.com")
console.log(User1)
console.log(User2)

/* Output:

User { FirstName: 'Tejal', Age: 20, Email: 'sakoretejal@gmail.com' }
User { FirstName: 'Tanay', Age: 25, Email: 'tanay@gmail.com' }*/