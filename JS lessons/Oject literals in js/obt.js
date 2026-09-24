//OBJECT LITERALS IN JAVASCRIPT

//what is object literals

// A COMMON DATA STRUCTURE THAT HOLDS KEY VAULE PAIR

const person = {
  name: `Max verstappen`,
  age: 29,
  location: `Monaco`,
  profession: `formula one driver`,
};

person.name = `charles leclerc`;
//person[`isAdmin`] = flase;

//to delete an key vaule from an oject we can use delete method

delete person.location;

//ASIGNING A FUNCTION TO A PROPERTY

person.about = function () {
  console.log(
    `${this.name} is a professional ${this.profession},who debuted in formula one in 2016 and have been part of the scuderia ferrari since then`,
  );
};
person.about();

console.log(person);

//ANOTHER WAY TO DECLARE AN OBJECT IS

let a;
const driver = {}; //or new Object();
driver.name = `DANIEAL RICORDO`;
driver.age = 32;
driver.profession = `Formula one driver `;
driver.team = `Red bull Racing `;
x = driver;
console.log(x);

//SPREAD OPERATOR IN OBJECTS

const obj1 = {
  a: 4,
  b: 6,
};

const obj2 = {
  c: 9,
  d: 3,
};

const obj3 = { ...obj1, ...obj2 }; //this will nest ohj1 into obj2
console.log(obj3, typeof obj3);

//ARRAYS OF OBJECTS
let r;

const todo = [
  { id: 3, name: `max verstappen` },
  { id: 16, name: `charles leclrec` },
  { id: 12, name: `kimi antenilie` },
];

r = todo[0].name;

//TO COLLECT ALL THE KEY VAULE OF AN OBJECT WE CAN USE KEY METHOD Object.Keys();

r = Object.keys(driver);

//TO COLLECT ALL THE VAULE ELEMENTS FROM A OJ=BJECT WE CAN USE VAULE METHOD

r = Object.values(driver);
console.log(r);
