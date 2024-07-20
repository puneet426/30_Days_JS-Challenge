//Activity 1
// task 1
let a = 4
let b = 5
let sum = a+b
console.log(sum)

// task 2
let c = 10
let d = 2
console.log(c-d)

// task 3
 let e = 15
 let f = 3
 console.log(e*f)

 //task 4
let g =70
let h = 35
console.log(g/h)

// task 5
let i = 10
let j = 2
console.log(i%j)

// Activity 2

// task 6

let num = 15
num += 14
console.log(num)

// task 7
let num1 = 15
num1 -= 14
console.log(num1)

// Activity 3

// task 8
let num2 =42
let num3 = 15
const grea = num2>num3
const small = num2<num3
console.log(grea, small)

// task 9
let num4 = 15
let num5 = 15
const grea1 = num4>=num5
const small1 = num4<=num5
console.log(grea1, small1)

// TASK 10
let num6 = 15
let num7 = "15"
const check1 = num6==num7
const check2 = num6!=num7
const check = num6===num7
console.log(check,check1,check2)


// Activity 4
// task 11
let num8 = 15
let num9 = 10
let comb = num8 && num9
console.log(comb)

// task 12

let num10 = 15
let num11 = 10
let combOR = num10 || num11
console.log(combOR)

// task 13

let num12 = 15
let num13 = 10
let combNOT = !num12 
console.log(combNOT)

//Activity 5: Ternary Operator
//Task 14: Write a program that uses the ternary operator to check if a number
//is positive or negative and log the result to the code

const Numbers1 = -10;
Numbers1 > 0 ? console.log("Number is positive"):console.log("Number is negative")

// Feature Request
 //1. Arithmetic Operations Script: Write a script that perform basic
 //arithmetic operations (addition,subtraction,multiplication,division,remainder)
 //on two numbers and logs the results.


  let firstnum = 10
  let secondnums = 5;
 const add = firstnum + secondnums;
 const subt = firstnum - secondnums;
 const Multply = firstnum * secondnums;
 const division = firstnum / secondnums;
 const remainders = firstnum % secondnums;
 console.log("Addition:",add)
 console.log("Subtraction:",subt)
 console.log("Multicpication:",Multply)
 console.log("Division:",division)
 console.log("Remainder:",remainders)
 //2. Comparison and Logical Operators Script: Create a script that compares
 //two numbers using different comparison operator and combines condition using
 //logical operators, logging the results.
 // Declare two numbers
 let nums1 = 10;
 let nums2 = 5;
 // Comparison operators
 console.log("num1 == num2:", num1 == num2); // false
 console.log("num1 === num2:", num1 === num2); // false
 console.log("num1 != num2:", num1 != num2); // true
console.log("num1 !== num2:", num1 !== num2); // true
console.log("num1 > num2:", num1 > num2); // true
console.log("num1 < num2:", num1 < num2); // false
console.log("num1 >= num2:", num1 >= num2); // true
console.log("num1 <= num2:", num1 <= num2); // false
// Logical operators
let condition1 = num1 > num2; // true
let condition2 = num1 === 10; // true
console.log("condition1 && condition2:", condition1 && condition2); // true
console.log("condition1 || condition2:", condition1 || condition2); // true
console.log("!condition1:", !condition1); // false
//Feature Request:3.Ternary Operator Script: write a script that uses the
//ternary operator to determine if a number is positive or negative and logs the
//result.
// Declare a number
let number = 5;
// Use the ternary operator to determine if the number is positive or negative
let result = (number >= 0) ? "Positive" : "Negative";
// Log the result to the console
console.log("The number is:", result);