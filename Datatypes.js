//string
var paymentMode
paymentMode = "creditCard";
console.log(paymentMode)
//typeof
console.log(typeof paymentMode)

//number
var logtime = 25;
console.log (logtime)
//typeof
console.log(typeof logtime)

//boolean
var loggedIn = false;
console.log (loggedIn)
//typeof
console.log(typeof loggedIn)

//bigint
const x = 1;
BigInt(Number.MAX_SAFE_INTEGER)
//typeof    
console.log(typeof x)

//undefined
var link
console.log (link)
//typeof
console.log (typeof link)

//symbol
const sym = Symbol ("foo");
console.log(sym)
//typeof
console.log (typeof sym)

//null 
const foo = null;
console.log(foo)
//typeof
console.log (typeof foo)


//nonprimitive Datatypes

const person = {
    name: "Rizwan",
    age : 25,
};
console.log(person)

person.name = "rizwan";
console.log(person);

//Comparison of non primitive data types

person1 = {
    name: "Rizwan",
    age: 25,
};

const person2 = {
    name: "Rizwan",
    age: 25,
};

person1 === person2; 
// I can't run these block of code above, I don't know why.

const persons = ["Rizwan", "Ashiq"];
const persons2 = ["Rizwan", "Ashiq"];

persons === persons2;