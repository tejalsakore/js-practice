// Allow user to access course if he:
// logged in with google or
// logged in with facebook or
// logged in with email
google = true;
fb     = false;
email  = true;

if(google||fb||email)
{
    console.log("Login Successfull 🏆!, You can access course now 👍");
}
else
{
    console.log("Sorry you can't access the course 👎,Please login first🙏");
}

// Login Successfull 🏆!, You can access course now 👍