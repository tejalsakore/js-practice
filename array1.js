// Old way of declaring array
var contries = ["India", "England", "New York", "France"];

// Updated way of declaring array
var states = new Array("Maharashtra", "Kashmir", "Goa");
// or
var states = Array("Maharashtra", "Kashmir", "Goa");

// Array can contain mixed data types
var mixed = Array(1, 2, "Me", "me@code.com", true);

// Printing an Array (accessing array)
console.log(contries);//[ 'India', 'England', 'New York', 'France' ]

console.log(states); //[ 'Maharashtra', 'Kashmir', 'Goa' ]

console.log(mixed); //[ 1, 2, 'Me', 'me@code.com', true ]

// Printing an element of array(accessing elements of array)
console.log(contries[1]); //England

// Replacing element of array
states[2]="Punjab";
console.log(states);//[ 'Maharashtra', 'Kashmir', 'Punjab' ]

// Measuring the length of an array
console.log(contries.length); // 4
console.log(states.length);// 3

// Getting index of elements of an array
console.log(states.indexOf("Punjab"));// 2
console.log(states.indexOf("Assam")); // -1

// Deleting last element of an array
states.pop();
console.log(states); // [ 'Maharashtra', 'Kashmir' ]

contries.pop();
console.log(contries); // [ 'India', 'England', 'New York' ]

// Shifting and Unshifting 
states.unshift("Assam");
console.log(states); // [ 'Assam', 'Maharashtra', 'Kashmir' ]

// Deleting first element of an array
states.shift();
console.log(states); // [ 'Maharashtra', 'Kashmir' ]
states.shift();
console.log(states); //[ 'Kashmir' ]

// Converting a string(or anything) into an array
console.log(Array.from("Tejal")); // [ 'T', 'e', 'j', 'a', 'l' ]


