// Callback and arrow function
// Two normal programs to check number is even or not
function isEven(element)
{
    if (element%2===0)
    {
        return true
    }
    else
    {
        return false
    }
};
console.log(isEven(4)); // true
//Or
var isEven = function (element) 
{
    return element%2===0;
}
console.log(isEven(2)); // true

// To check number is even or not using arrow function
var isEven = (element) =>
{
    return element%2===0;
}
console.log(isEven(3)); // false

// Using callback function
var result= [2,4,6,8].every(isEven);
console.log(result); // true

var result= [2,3,6,8].every(isEven);
console.log(result); // false

// Modern ways of using callback and arrow function
var result= [2,4,6,8].every((e)=>
{
    return e%2===0;
})
console.log(result); // true
//or
var result= [2,4,6,8].every((e)=> e%2===0);
console.log(result); //  true
