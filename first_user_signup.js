var greet ="Welcome to RTC";
const uid ="abc123";
// uid = "abcd"    ->this won't work because of const
fullName ="Tejal Sakore";
email    ="sakoretejal1511@gmail.com";
password ="123456789";
confirmPassword ="123456789";
courseCount = 0;
isLoggedInFromGoogle = false;      //it's better to name ur variable long

console.log(greet+"\n With unique id :"+uid+"\n User is :"+fullName+"\n Her email :"+email+"\n Password :"+password+"\n Confirmed Password"+confirmPassword+"\n Course enrolled :"+courseCount+"\n Logged in from google? :"+isLoggedInFromGoogle);