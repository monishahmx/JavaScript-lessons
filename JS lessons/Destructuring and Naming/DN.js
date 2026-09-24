//DESTRUCTING AND NAMING IN JS

const firstName = `Max`;
const lastName = `Verstappen`;
const age = 30;

const person = {
  firstName,
  lastName,
  age,
};

console.log(person.firstName);

//DESTRUCTUING

const todo = {
  id: 3,
  title: `World championship`,
  team: `Red BUll`,
};

//const team = todo.team;

//BUT WHEN USING DETRUCT WE CAN OBTAIN ALL THE VAULES OF THE KEY ELEMENTS

const { team, id } = todo;
console.log(team, id);

//DETRUCTURE THE ARRAYS

const num = [1, 2, 3, 4, 5];

//IN ARRAYS WE USE SQUARE BRACKETS AND IN OBJECTS  WE USE CURLY BRACKETS

//const [first, second] = num;

//REST OPERATOR

const [first, second, ...rest] = num;
console.log(first, second, rest);
