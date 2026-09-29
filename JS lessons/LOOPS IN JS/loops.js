//LOOPS IN JS

// for({intualization};{conditonalExpression};{incrementExpression})
//statement;
//INITIAL EXPRESSION :-INITIALIZES A VARIABLE/COUNTER

//CONDITIONAL EXPRESSION :- CONDITION THAT THE LOOP WILL CONTINUE TO RUN AS LONG AS IT IS MET OR UNTILL THE CONDITION IS FALSE

//INCREMENT EXPRSSSION :- EXPRESSION THAT WILL BE EXECUTED AFTER EACH ITERATION OF THE LOOP,USALLY INCREMENTS THE VARIABLE

//STATEMENTS:-CODE THAT WILL BE EXECUTED EACH TIME THE LOOP IS RUN {} SYNTAX

for (let num = 0; num <= 10; num++) {
  console.log(num);
}

for (let i = 0; i <= 10; i++) {
  if (i === 6) {
    console.log(`6 is ny lucky number`);
  } else {
    console.log(i);
  }
}

//nested for loops

for (let a = 1; a <= 10; a++) {
  console.log(`Number  ` + a);

  for (let b = 1; b <= 10; b++) {
    console.log(`${a}  *
        ${b} = ${a * b}`);
  }
}

//LOOP THROUGH AN ARRAY

const num = [1, 2, 3, 4, 5, 6];
for (let i = 0; i < num.length; i++) {
  if (i === 5) {
    console.log(`${num[i]} is my lucky number`);
  } else {
    console.log(num[i]);
  }
}

//break and continue
//break helps in break out of the loop

for (let i = 0; i <= 20; i++) {
  if (i === 15) {
    console.log(`Breaking../`);
    break;
  }
  console.log(i);
}

//with continue we can skip code in current iterartion to next iterartion

for (let i = 0; i <= 20; i++) {
  if (i === 13) {
    console.log(`Skipping 13../`);
    continue;
  }
  console.log(i);
}

//WHILE AND DO WHILE LOOP

//FRISSBUZZ CHALLENGE
//PRINT OR LOG THE NUMBERS FROM 1 TO 100;
//FOR MULTIPLES OF THREE PRINT FRIZZ INSTAED OF THE NUMBER
//FOR NUMLTILE OF FIVE PRINT BUZZ
//FOR NUMBERS WHICH ARE MULTIPLE OF BOTH THREE AND FIVE PRINT FRIZZBUZZ

for (let i = 1; i <= 100; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log(`FrizzBuzz`);
  } else if (i % 3 === 0 || i % 5 === 0) {
    console.log(`Frizz`);
  } else {
    console.log(i);
  }
}

//FOR OF LOOPS IN JS
// THIS IS A CLEANER WAY TO LOOP THROUGH AN ARRAY

const racer = [`max`, `charles`, `kimi`, `lewis`, `carlos`];
for (const racers of racer) {
  console.log(racers);
}

//LOOP THROUGH AN OBJECT

const drivers = [
  {
    d1: `Max`,
    d2: `charles`,
    d3: `danny`,
    d4: `kimi`,
  },
];

for (const user of drivers) {
  console.log(user.d2);
}

//loop through an string

const teams = `red bull racing`;
for (const team of teams) {
  console.log(team);
}

//LOOP THROUGH A MAPS

const map = new Map();
map.set("name", `Max`);
map.set(`age`, 30);
for (const [key, vaule] of map) {
  console.log(key, vaule);
}
