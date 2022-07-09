// Function to get user role

var getUserRole= function (name, role)
{
    switch(role)
    {
        case "admin":
            return `${name} is an admin has all access `;
            break;//not necessary
        case "subadmin":
            return `${name} is a subadmin has access to create/delete course`;
            break;
        case "test-prep":
            return `${name} is a testprep has access to create/delete tests `;
            break;
        default :
            return `${name} is a trial user`;
            break;
    }
}

console.log(getUserRole("Tejal", "test-prep"));

// Tejal is a testprep has access to create/delete tests