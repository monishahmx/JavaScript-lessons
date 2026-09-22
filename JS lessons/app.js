//console.log(`Hello`);
//console.log(`I am rebranding myself`);
//window.alert(`This ia an alert!`);
//document.getElementById("myId").textContent =
//`Max Verstappen won P3 at monza yesterday`;
/*let x = 24;
let name = "Racha";
let price = 100;
let FavoriteFood = "Dose";
let grandprix = true;

console.log(typeof price);
console.log(`${name} is going to be ${x} old`);
console.log(`I bought a shirt and the price was ${price}`);
console.log(`${name} favourite food is ${FavoriteFood}`);
console.log(
  `Did max verstapen get an podium at the monza gp yesterday:${grandprix}`,
);
console.log(`Is max ${name} favourite driver on the grid : ${grandprix}`);
*/
//console.log(`Arugmented assignment operators`);
//let students = 30;
//students += 5;
//students -= 5;
//students *= 5;
//students **= 3;
//students++;
//students--;

//console.log(`The number of students in the class is ${students}`);
//console.log(`operator precedence`);
//let result = 1 + 2 * 3 + 4 ** 2;
//console.log(result);
//

//
//how to get user input //
/*let username;
document.getElementById("mySummit").onclick = function () {
  username = document.getElementById("myText").value;
  document.getElementById("myId1").textContent =
    `Welcome To the course ${username}`;
};

*/

//Random Munber genrnator
//let randomNum = Math.floor(Math.random() * 6);
//console.log(randomNum);

//IF SELSE STATEMENTS IN JS

/*const myLabel2 = document.getElementById("myLabel2");
const myAge = document.getElementById("myAge");
const mySummit1 = document.getElementById("mySummit1");
const resultElement = document.getElementById("resultElement");
let age;

mySummit1.onclick = function () {
  age = myAge.value;
  age = Number(age);
  if (age >= 25) {
    resultElement.textContent = `You are allowed to enter this site`;
  } else if (age <= 0) {
    resultElement.textContent = `you are not allowed to enter this site if your 0 years old`;
  } else {
    resultElement.textContent = `you must be 18+ to enter this site`;
  }
};
*/

//STRING METHODS//

//let username = "max";

//console.log(username.charAt(3));
//console.log(username.repeat(3));
//console.log(username.toUpperCase());
//console.log(username.indexOf("p"));
//console.log(username.trim(2));
/*let result = username.startsWith(" ");
if (result) {
  console.log(`The name can not start with a space`);
} else {
  console.log(username);
}*/

//LOGICAL OPERATORS IN IS

//AND &&
// or \\
// not !

/*let temp = 50;
if (temp > 0 && temp <= 30) {
  console.log(`the weather today is good`);
} else {
  console.log(`the weather is bad`);
}
*/

//
// = assignment operator
// == comparison operator (campares if the vaule is equal)
// === strict equaity operator(compares if the vaules and the data type is equal)
// != in equity operator
// !== strict inequity operator

// FOR LOOPS IN JAVASCRIPT //

/*for (i = 0; i <= 10; i++) {
  if (i == 13) {
    continue;
  } else {
    console.log(i);
  }
}
*/

// FUNCTIONS IN JAVASCRIPT //

/*function racingDriver(username) {
  console.log(`${username} won a third place in manzo gp in 2026`);
}
racingDriver("Max");
*/

// ADDING TWO VALUES WITH RETURN FUNCTION //

/*function add(x, y) {
  return x + y;
}
let answer = add(15, 3);
console.log(answer);
*/

// ARRAYS IN JS //
//variable like structure that can store more than mone value//

/*let f1Drivers = ["Max", "Charles", "Kimi", "Lewis"];
//f1Drivers[3] = "Carlos";
//f1Drivers.push("carlos");
//f1Drivers.pop("lewis");
f1Drivers.sort();

for (let driver of f1Drivers) {
  console.log(driver);
}
*/

// CALL BACK FUNCTION IN JS //

/*Hello(Madrid);

function Hello(callback) {
  console.log(`HELLO!`);
  callback();
}

function Madrid() {
  console.log(`Madrid is the new circiut added to the calender`);
}
*/

console.log(`Hello world`);
