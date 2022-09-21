const Tejal ={
    firstName : "Tejal",
    lastName : "Sakore",
    age : 20,
    getInfo: function(){
        console.log(`First name is ${this.firstName}
Last name is ${this.lastName}
Age is ${this.age}
         `);
    },
};
Tejal.getInfo();

const Karan ={
    firstName : "Karan",
    lastName : "DK",
    age : 27,
};
Tejal.getInfo.bind(Karan)();
//or
var karanInfo = Tejal.getInfo.bind(Karan);
karanInfo();


// First name is Tejal
// Last name is Sakore
// Age is 20
         
// First name is Karan
// Last name is DK
// Age is 27
         
// First name is Karan
// Last name is DK
// Age is 27
         
