// Allow user to access course if he:
// logged in with google or
// logged in with facebook or
// logged in with email
google = true;
fb     = false;
email  = true;

if(google||fb||email)
{
    console.log("Login Successful π!, You can access course now π");
}
else
{
    console.log("Sorry you can't access the course π,Please login firstπ");
}

// Login Successful π!, You can access course now π