//operators in js

//1 Arthematic operators
let x;
x = 2 + 2;
x = 1 - 3;
x = 5 * 4;
x = 4 / 4;
x = 7 % 5;

//concatenations

x = `hello` + `world`;
console.log(x);

// Exponent
x = 2 ** 3;

//increment

x++;

//Decrement

x--;

// Assignment operators

x = 10;
x += 7;
x -= 9;
x *= 8;

//Comparison operators

x = 2 == 2;

//triple equals
x = 2 === `2`; //false

//not equal
x = 2 != `2`;

//Greater than less than

x = 10 > 5;
x = 10 < 5;
x = 10 <= 5;
x = 10 >= 5;

//TYPE COERCION

let y = 5;
y = 5 + `5`;

y = 5 * `5`; //25
y = Number(true);

y = 8 + true;
