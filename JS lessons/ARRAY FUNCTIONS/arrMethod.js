//HIGH ORDER ARRAY METHODS

//forEach()
//its loops through the indexs of thr given arrays

const racers = [`Max`, `Charles`, `Kimi`, `lewis`];
racers.forEach(function (drivers) {
  console.log(drivers);
});

//another method using arrow functions

racers.forEach((item) => console.log(item));
racers.forEach((item, index, arr) => console.log(`${index} - ${item}`));

//////////////////////////////////////

function teamDrivers(racers) {
  console.log(racers);
}
racers.forEach(teamDrivers);

const racerObjs = [
  {
    name: `Max`,
    age: 30,
    team: `Red Bull racing`,
  },
  {
    name: `kimi`,
    age: 20,
    team: `Mercedes`,
  },
  {
    name: `Charles`,
    age: 29,
    team: `Ferrari`,
  },
];
racerObjs.forEach((iteams) => console.log(iteams));

//ARRAY FILTER
//  Filter method creates a shallow copy of the portion of the givrn array,filter them down to just the elements from the given array that pass the test implemented by the provided function

const arr = [1, 2, 3, 4, 5, 6, 7];
const arr1 = arr.filter(function (number) {
  return number % 2 === 0;
});
console.log(arr1);

//shorther version
const arr2 = arr.filter((number) => number % 2 === 0);
console.log(arr2);

//SAME THING WITH FOR EACH

let evenNumbers = [];
arr.forEach((arr3) => {
  if (arr3 % 2 === 0) {
    evenNumbers.push(arr3);
  }
});
console.log(evenNumbers);

//ARRAY MAP METHOD

const num = [1, 2, 3, 4, 5, 6];
const doubeNum = num.map((x) => x * 3);
console.log(doubeNum);

//CHAIN MAP METHODS
const num1 = [1, 2, 3, 4, 5, 6];
const sqaureDoubles = num1.map((x) => Math.sqrt(x));
num1.map((double) => double * 2);
console.log(sqaureDoubles);

//chaining a different methods

const num2 = num.filter((y) => y % 2 === 0);
num.map((y) => y * 5);
console.log(num2);

//REDUCE

//REDUCE() METHODS EXECITES A USER SUPPILED REDUCE CALLBACK ON EACH ELEMENT OF THE ARRAY IN ORDER PASSING IN THE RETUEN VAULE FROM THR CALCULATION ON THR PROCEDDING ELEMENTS.THE FINAL RESULT OF THR RUNNING THR REDUCER ACROSS ALL THE ELEMNTS OF THE ARRAY IS A SINGLE VAULE

const Number = [1, 2, 3, 4, 5, 6, 7, 8];
const sum = Number.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  0,
);
console.log(sum);

//ARRAY CHALLENGE

const words = [`max`, `charles`, `kimi`, `carlos`];
const cWords = words.map((word) => {
  return word[0].toUpperCase() + word.slice(1, word.length);
});
console.log(cWords);

var a = {
  id: 100,
  title: `iterview`,
  name: `moni`,
};
var b = {
  num: 1,
  profession: `racer`,
  deiver: `Max`,
};

var c = { ...a, ...b };
console.log(c);

const x = [];
x[4] = 1;
x.forEach((i) => console.log(i));
