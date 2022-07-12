// Slicing and splicing
/* Syntax of slice()
slice(start_index, end_index+1)
*/

var team = ["Suraj","Tejal","Yash","Anand","Prajakta","Vaibhavi","Vaishnavi"];
console.log(team.slice(1));//[ 'Tejal', 'Yash', 'Anand', 'Prajakta', 'Vaibhavi', 'Vaishnavi' ]
console.log(team.slice(0,4));//[ 'Suraj', 'Tejal', 'Yash', 'Anand' ]

/* Syntax of slice()
splice(start_index, delete_count, "string to be replace")
*/
team.splice(1,4,"HI");
console.log(team); //[ 'Suraj', 'HI', 'Vaibhavi', 'Vaishnavi' ]
team.splice(1,4,"HI","BYE");
console.log(team); //[ 'Suraj', 'HI', 'BYE', 'Vaibhavi', 'Vaishnavi' ]