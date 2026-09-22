//STRINGS IN JAVASCRIPT ;
//Temple literals
let x;
const name = `max`;
const age = 29;
x = `hello my name is ${name} and I'm ${age} years old`;
console.log(x);

const racer = "MAX vertsappen";
raceDriver = racer.length;

raceDriver = racer[6];
raceDriver = racer.toLocaleLowerCase();
raceDriver = racer.toLocaleUpperCase();
raceDriver = racer.charAt(4);
raceDriver = racer.indexOf(`v`);
raceDriver = racer.substring(3, 7);
raceDriver = racer.slice(-4, -9);
raceDriver = racer.trim(); //Cleans up the blank space
raceDriver = racer.replace();
raceDriver = racer.valueOf();
raceDriver = racer.split(); //helps to breakdown into array;

console.log(raceDriver);

//Given a string below covvert the first index of the string into capital letter

const myString = `developer`;

let mynewString;

mynewString = myString.charAt(0).toUpperCase() + myString.substring(1);
console.log(mynewString);
