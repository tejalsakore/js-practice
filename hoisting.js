// Function hoisting
// Example 1
catName("Tiger");

function catName(name)
{
    console.log("My cat's name is "+ name);
}
// My cat's name is Tiger

// Example 2

catName("Tiger");

 var catName = function (name)
{
    console.log("My cat's name is "+ name);
}
// TypeError: catName is not a function

// Variable hoisting
// Example 1

console.log(num); // returns 'undefined'
var num;          // declaration
num = 6;          // initialization
console.log(num); // returns 6

// Example 2

console.log(num); // ReferenceError: num is not defined
num = 6;          // initialization


