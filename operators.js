var listingPrice = 799;
var sellingPrice = 199;
var discountPrice = ((listingPrice - sellingPrice)/listingPrice)*100;

console.log("The Discount Percentage:", discountPrice)

displayDiscountPercentage = Math.round(discountPrice);
console.log("The Discount Percentage:", displayDiscountPercentage + "%Off")

//example 2
var num1 = 12;
var num2 = 23;

console.log(num1 + num2);
console.log(num1 - num2);
console.log(num1 * num2);
console.log(num1 / num2);
console.log(num1 % num2);

//example 3
var num1 = 13;
var num2 = 23;
var answer = num1 > num2;

console.log (answer)