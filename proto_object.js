var User = {
    name:"",
    getUserName: function(){
        console.log(`User name is :${this.name}`);
    }
};

var User1 = Object.create(User);
console.log(User1);                           //{}:If the value is null or undefined, it will create and return an empty object.
User1.name="Tejal";                           
User1.getUserName();                          //User name is :Tejal


var User2 =Object.create(User,{
    name:{value:"Sam"},
    courseCount:{value:3}
});
User2.getUserName();                          //User name is :Sam 