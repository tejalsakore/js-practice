//example 1

const user = ["Tejal",20,"Admin"];
var name=user[0];
var role=user[2];
console.log(role);
//or
var [name,age,role]=user;
console.log(age);

/*
Admin
20
*/

//example 2

const myData ={
  name :"Tejal",
  age:20,
  role:"Admin"
};

console.log(myData.name);
//or
var {name,age,role}=myData;
console.log(name);

/*
Tejal
Tejal
*/