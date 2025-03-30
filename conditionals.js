// example 1

var temperature = 40;
if(temperature < 20)
{
    console.log("The Temperature is cold outside");
}
if (temperature < 30)
{
    console.log ("The Temperature is moderate outside");
}
else
{
    console.log("The Temperature is hot outside");
}


// example 2

var temperature = 20
if (temperature < 20)
{
    console.log ("The Temperature is cold outside");
}
if (temperature < 30)
{
    console.log("The Temperature is moderate outside");
}
else
{
    console.log("The Temperature is hot outside");
}

//example 3

var temperature
temperature = 19;

if (temperature < 20)
{
    console.log ("The Temperature is cold outside")
}
if (temperature < 30)
{
    console.log("The Temperature is moderate outside")
}
else{
    console.log ("The Temperature is hot outside")
}

//example 4

var loggedIn = true;
var emailVerified = true;
var cardInfo = false;

if (loggedIn)
{
    console.log ("You are logged in");
    if (emailVerified){
        console.log("Your Email is Verified")
        if(cardInfo){
            console.log("Your card were correct, You can make purchase")
        }
        else{
            console.log("Your card info were wrong, You can't make purchase")
        }
    }
        else {
            console.log("Your Email aren't Verified")
        }
}
else{
    console.log("Your aren't logged in")
}

var loggedIn = true;
var emailVerified = false;
var cardInfo = true

if(loggedIn && emailVerified && cardInfo)
{
    console.log ("Allow the user to purchase courses");
}
else{
    console.log ("Don't allow the user to purchase the courses");
}

//example 5

var byGoogle = true;
var byEmail = false;
var byFacebook = true;

if(byGoogle){
    console.log("byGoogle");
}
if(byEmail){
    console.log("byEmail");
}
if(byFacebook){
    console.log("byFacebook");
}

//example 6
var authenticated = false;
authenticated ? console.log("SIGN OUT Button") : console.log("LOG IN/SIGN UP")

//example 7
var user = "test prep";

switch (user) {
    case "admin":
        console.log(user , "can get full access");
        break;
    case "sub admin":
        console.log(user , "can get full access to create and delete the courses");
        break;
    case "test prep":
        console.log(user, "can get full access to create / delete the test" );
        break;
    case "user":
        console.log(user , "can ger access to consume the contents");
        break;
    default:
        console.log("trials user is asking for access")
        break;
}