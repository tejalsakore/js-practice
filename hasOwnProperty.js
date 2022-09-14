var User = function(firstName,age){
    this.FirstName= firstName;
    this.Age= age;
    this.getAge= function(){
        console.log(`Age is :${this.Age}`);
    };
};

User.prototype.getFirstName= function(){
    console.log(`Your First Name is : ${this.FirstName}`);
};

var User1 = new User("Tejal", 20);
if(User1.hasOwnProperty("FirstName")){
    User1.getFirstName();
};
//User1.getFirstName();
User1.getAge();

/* Output:
Your First Name is : Tejal
Age is :20
*/
