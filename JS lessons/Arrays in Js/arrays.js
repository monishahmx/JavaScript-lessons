//ARRAYS ARE THE SPECIAL TYPES OF OJECT AND A DATA STRUCTURE IN JS THAT STORES MULTIPLE VAULE

let x;
const arr = [1, 2, 3, 4, 5];
x = arr[0];
x = arr[4] + arr[3];
console.log(x);

//to check the length of an array

x = arr.length;

//Array Constructor

const drivers = new Array(`max`, `charles`, `kimi`, `carlos`);
console.log(drivers);

//ARRAY METHODS//

const num = [3, 5, 7, 8, 9];

//to add an element in an array we can use push method
num.push(10);

//to remove an last element in an array we can use pop method

num.pop();

//to add an element at the start of an array we can use unshift

num.unshift(8);

//to remove an element at the start of an array we can use shift method

num.shift();

//to revsere all the elments in an array we can reverse element

num.reverse();

//to check weather the given element vaule is in the array er use include method

let y;
y = num.includes(5);

//to check the index number of an specific vaule of an element in an array we use indexof method

y = num.indexOf(9);

// to select a specific range of elemnts in an array we use slice method

y = num.slice(2, 4);

//to remove an specific range of elements in an array we use spilce method

y = num.splice(3, 1);

console.log(y);

//Nested arrays

let a;
const fruits = [`apple`, `banana`, `orange`];
const berries = [`strawberries`, `blueberrys`, `raspberry`];
fruits.push(berries);
console.log(fruits);
a = fruits[2][1];

//  CONCATINATE AN ARRAY

a = fruits.concat(berries);

//SPREAD OPERATOR :- IT HELPS TO CONCATE THE ELEMENTS IN BOTH THE NESTED ARRAYS [...]

a = [...fruits, ...berries];

//FLATTEN ARRAYS;-It helps to unnest the arrays and its elements
let b;

const nest = [1, 2, [3, 4], 5, [6, 7], 8];
b = nest.flat();
console.log(b);

//STATIC METHODS ON A ARRAY OBEJECTS

//isArray object method is used to check weather the given element is actually inside the array

a = Array.isArray("hello");
console.log(a);

//.from  object method is used to convert a given string into an array
let m;
m = Array.from(`8905`);
console.log(m);

//.of object method is used to create an array from a declared variables

let n = 3;
let k = 9;
let g = 8;

let v;
v = Array.of(n, k, g);
console.log(v);

//ARRAYS CHALLENTS GIVEN

const number = [1, 2, 3, 4, 5];
number.unshift(0);
number.push(6);
number.reverse();
console.log(number);
