//Do while loop
var myStates=["Maharashtra","Assam","Goa",2001,"Punjab","Kerala"];
let i=0;
do
{
    //if(typeof myStates[i] !== "string") continue;
    console.log(myStates[i]);
    i++;
}while(i <myStates.length);

/*Maharashtra
Assam
Goa
2001
Punjab
Kerala*/

//It runs at least once even if the condition is false
//ex:
let i=20;
do
{
    console.log(i);
    i++;
}while(i <10); //20