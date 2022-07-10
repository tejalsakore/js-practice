// Block Scope
{
    let x=2;
    console.log(x); // 2
}
console.log(x); // can't access x

// Local Scope & Global Scope
var month= "may"; // global variable 

function sayMon()
{
 var month= "june"; // local or private variable
 console.log(month); // in local scope -> june
 sayMon2();
 function sayMon2()
 {
    console.log(month);// in local scope -> june
 };
};
sayMon();
console.log(month); // in global scope -> may
