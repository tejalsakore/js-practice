// Create an application with following roles:
// admin : gets full access
// subadmin : gets access to create/delete courses
// testprep : gets access to create/delete tests
// user : gets access to consume courses

user = "subadmin";

switch(user)
{
    case "admin":
        console.log("gets full access");
        break;
    case "subadmin":
        console.log("gets access to create/delete courses");
        break;
    case "testprep":
        console.log("gets access to create/delete tests");
        break;
    case "admin":
        console.log("gets access to consume courses");
        break;
    default:
        console.log("Trial User");
        break;
}

// gets access to create/delete courses