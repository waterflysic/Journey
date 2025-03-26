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
