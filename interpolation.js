var greet ="Welcome to RTC";
const uid ="abc123";
// uid = "abcd"    ->this won't work because of const
fullName ="Tejal Sakore";
email    ="sakoretejal1511@gmail.com";
password ="123456789";
confirmPassword ="123456789";
courseCount = 0;
isLoggedInFromGoogle = false;      //it's better to name ur variable long

console.log(`
${greet} 
With unique id :${uid}
User is :${fullName} 
Her email :${email}
Password :${password}
Confirmed Password :${confirmPassword}
Course enrolled :${courseCount}
Logged in from google? :${isLoggedInFromGoogle}
`);