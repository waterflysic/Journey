//example 1

var user = false;
if(user){
    console.log( typeof user , "true");
    
}
else{
    console.log(typeof user, "false");
}

//example 2;
var user = undefined;

if(user){
    console.log(typeof user, "true");
}
else{
    console.log(typeof user, "false");
    
}

//example 3

var user = null;
if(user){
    console.log(typeof user, "true");
}
else{
    console.log(typeof user, "false");
    
}

//example 4

var user = 0;
if(user){
    console.log(typeof user, "true");
}
else{
    console.log(typeof user, "false");
    
}
