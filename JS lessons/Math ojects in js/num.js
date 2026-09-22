//Number Objects in js and math objects

const { Children } = require("react");

let x;
const num = new Number(5);
x = num.toString();
x = num.toFixed(3); //add decimal or rounds the decimal place
x = num.toPrecision(2);
x = num.toExponential(2);
x = num.valueOf();

// to get the largest number property for the number type
x = Number.MAX_VALUE;
x = Number.MIN_VALUE;

console.log(x);

//MATH OBJECTS IN JS

let y;

y = Math.sqrt(9); //used to see the square root of a number
y = Math.round(9.3);
y = Math.floor(7.8); //rounds up to the lowest closest number;
y = Math.pow(2, 4); //gives the power of the given number
y = Math.random() * 10;
console.log(y);

//Number challenge

let a;
let b;

a = Math.floor(Math.random() * 100) + 1;
b = Math.floor(Math.random() * 50) + 1;
let sum = a + b;
console.log(sum);
//console.log(a);
//console.log(b);
/*const sumOutput = a + b;
const differenceOutput = a - b;
const productOutput = a * b;
const divideOutput = a / b;

console.log(sumOutput);
console.log(differenceOutput);
console.log(productOutput);
console.log(divideOutput);*/
