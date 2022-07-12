//For loop
var myStates=["Maharashtra","Assam","Goa",2001,"Punjab","Kerala"];
for(let i=0; i <myStates.length; i++)
{
    if(typeof myStates[i] !== "string") continue;
    console.log(myStates[i]);
}
/*Maharashtra
Assam
Goa
Punjab
Kerala*/