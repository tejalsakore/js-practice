//For of loop
// Usually used for array

const myStates=["Maharashtra","Assam","Goa","Punjab","Kerala"];
for(const m of myStates)
{
    console.log(m);
}
/*Maharashtra
Assam
Goa
Punjab
Kerala*/

//For in loop
// Usually used for objects

const symbols=
{
    yt:"YouTube",
    ig:"Instagram",
    fb:"Facebook",
    rtc:"Road To Code"
}
for(const a in symbols)
{
    console.log(symbols[a]);
}
/*YouTube
Instagram
Facebook
Road To Code*/
for(const a in symbols)
{
    console.log(`Key is : ${a} and Value is : ${symbols[a]}`);
}
/*Key is : yt and Value is : YouTube
Key is : ig and Value is : Instagram
Key is : fb and Value is : Facebook
Key is : rtc and Value is : Road To Code*/