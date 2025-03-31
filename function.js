//example 1

function myfirstf(name)
{
    console.log("yes, your first f is speaking");
    console.log("yes, your first f speaking", name);
}
myfirstf("person 2");
myfirstf("person1");

//example 2

function myfirstf (name)
{
    console.log("yes your first f speaking");
    console.log("yes, first f speaking", name);
} 
myfirstf(); // this calls function
myfirstf(); // this refers function // check for difference between calling function and referring function

//example 3

function number()
{
    return "$(name): greetings, how can i help you?${name1}: hanks, He wants"
}
var value = number()
console.log(value);

console.log(number)

//example 4

function getUserRole(name,role)
{
    switch (role){
        case "admin":
            return '$ (name) is a admin, can get full access'
            break;
        case "sub admin":
            return '$ (name) is a sub admin, can get access to create / delete the test'
            break;
        case "testprep":
            return '$ (name) is a test prep, can get access to create and delete the test'
            break;
        case "user":
            return '$ (name) is a user, can get access to create/ delete the test'
            break;
        default:
            return '$ (name) is a trial user'
            break;
    }
}

console.log(getUserRole("pavi", "admin"));
