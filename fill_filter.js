// Fill & Filter 
/*
syntax of fill 
fill(value_to_fill,start_index,end_index)
*/

var testArray = [11,12,13,14,16,15,17,19,18];
console.log(testArray.fill("T")); // [ 'T', 'T', 'T', 'T', 'T', 'T', 'T', 'T', 'T' ]
console.log(testArray.fill("T", 3)); // [ 11, 12, 13, 'T', 'T', 'T', 'T', 'T', 'T' ]
console.log(testArray.fill("T", 3, 5)); // [ 11, 12, 13, 'T', 'T', 15, 17, 19, 18 ]

// Filter
const myNumber=[50,60,88,95,65,69,86,36,64];
console.log(myNumber.filter((num)=> num != 69)); // [ 50, 60, 88, 95, 65, 86, 36, 64 ]
console.log(myNumber.filter((num)=> num<69)); // [ 50, 60, 65, 36, 64 ]
console.log(myNumber.filter((num)=>num>=86)); // [ 88, 95, 86 ]