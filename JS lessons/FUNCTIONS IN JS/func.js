//FUNCTION IS A WAY TO GROUP A CODE TOGETHER THAT WHICH CAN BE RUN LATER
//IT IS A WAY TO MAKE THE CODE MORE READABLE

//BASIC WAY TO CREATE A FUNCTION

function sayHello() {
  //when declaring the functions these are parameters
  console.log(`Hello`);
}
sayHello(); //passing the vaules to the function is called arguments

//WRITE A FUNCTION TO ADD TWO NUMBERS
function add(num1, num2) {
  console.log(`The sum of the given two numbers is ,${num1 + num2}`);
}
add(20, 78);

//using RETURN ARGUMENTS

function subtract(num1, num2) {
  return num1 - num2;
}
const result = subtract(9, 5);
console.log(result);

//PARAMS AND ARGUMENTS IN THE FUNCTIONS

//what is aruguments

//data we pass in to invoke the function is called arguments
let name;
function registerUser(user) {
  return user + ` is registered`;
}
name = registerUser(`Max`);
console.log(name);

//DEFAULT PARAMETERSS

function f1Driver(driver = `MAX VERSTAPPEN`) {
  return driver + `  is a four time world champion formula one driver`;
}
console.log(f1Driver());

//REST PARAMETERS

//we can pass in unlimted arguments using a rest parameters

function sum(...numbers) {
  let total = 0;
  for (const num of numbers) {
    total += num;
  }
  return total;
}
console.log(sum(1, 45, 67, 88, 33));

//OBJECTS AS PARAMETERS

function redBull(user) {
  return `The main drivers for RED BULL racing are ${user.name1} and ${user.name2}`;
}
const user = {
  name1: `MAX VERSTAPPEN`,
  name2: `ISSACK HADJAR`,
};
console.log(redBull(user));

// ARRAYS AS A PARAMETERS

function getRandomNum(arr) {
  const numIndex = Math.floor(Math.random() * arr.length);
  const item = arr[numIndex];
  console.log(item);
}
getRandomNum([2, 3, 4, 5, 7, 8, 9, 3]);
