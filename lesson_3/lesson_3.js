// This is a simple comment in JavaScript

// 1. Variables
// let firstName = "John";
// let lastName = "Doe";
// const age = 40;
// const gender = "male";

// console.log("Full Name: " + firstName + " " + lastName); //concatenation
// console.log(`Full Name: ${firstName} ${lastName}`); //template literal
// console.log("Age: " + age); //concatenation
// console.log(`Age: ${age}`); //template literal

// Difference btw const and let
// const cannot be reassigned, but let can be reassigned
// const city = "Abuja";
// console.log(`City 1: ${city}`);

// // city = "Lagos"; // This will throw an error because city is a const

// 2. Data Types
// 1. String
// let firstName = "John";
// console.log(typeof firstName);

// 2. Number
// let age = 40;
// console.log(typeof age);

// 3. Boolean
// let isMale = false;
// console.log(typeof isMale);

// null
// let signedInUser = null; //nothingness
// signedInUser = "John Doe";

// undefined
// let lastName;
// console.log(typeof lastName); //undefined

// Rules is naming your variables
// 1. Variable names can only contain letters, numbers, underscores, and dollar signs.
// 2. Variable names must begin with a letter, underscore, or dollar sign.
// 3. Variable names are case sensitive (age and Age are different variables).
// 4. Reserved words (like JavaScript keywords) cannot be used as variable names.
// 5. Variable names should be descriptive and meaningful.

// 3. Operators
// Arithmetic Operators: +, -, *, /, %
// let a = 10;
// let b = 5;
// console.log("Addition: " + (a + b)); //15
// console.log("Subtraction: " + (a - b)); //5
// console.log("Multiplication: " + a * b); //50
// console.log("Division: " + a / b); //2
// console.log("Modulus: " + (a % b)); //0

// Assignment Operators: =, +=, -=, *=, /=, %=

// let c = 10;
// c += 5; // c = c + 5
// console.log("c after += 5: " + c); //15

// c -= 3; // c = c - 3
// console.log("c after -= 3: " + c); //12

// c *= 2; // c = c * 2
// console.log("c after *= 2: " + c); //24

// c /= 4; // c = c / 4
// console.log("c after /= 4: " + c); //6

// c %= 5; // c = c % 5
// console.log("c after %= 5: " + c); //1

// 4. Control Flow

//5. Functions
// function sum_of_two_numbers(a, b) {
//   return a + b;
// }
// function greet(name) {
//   return `Hello, ${name}!`;
// }

// // console.log(sum_of_two_numbers(500, 1000));
// console.log(greet("Joseph"));

// const sum_of_two_numbers = (a, b) => a + b;

// console.log(sum_of_two_numbers(500, 1000));

// 6. Arrays and Objects

// 7.  Control flow statements

const add = (num1, num2) => {
  return num1 + num2;
};

console.log(add(30, 80));
