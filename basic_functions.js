// Basic function
function sayHello()
{
    console.log("Hello Dear!");
}
sayHello();                      //Hello Dear!

// function argument but no return
function sayHello(name)
{
    console.log("Hello Dear!"+name);
}
sayHello("Tejal");               // Hello Dear!Tejal

 
// Injecting a variable
function sayHello(name)
{
    console.log(`Hello Dear,${name}. How are you?`);
}
sayHello("Tejal");              // Hello Dear,Tejal. How are you?

// function  no argument but return
function namastey()
{
    return ("Hello in India");
}
 greetings = namastey();
 console.log(greetings);        // Hello in India

 console.log(namastey());       // Hello in India
 
 // sum of two numbers using function
 num1 = 5;
 num2 = 11;
 function sum()
 {
    console.log(num1+num2); 
 }
 sum();                          // 16