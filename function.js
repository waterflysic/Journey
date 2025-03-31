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
