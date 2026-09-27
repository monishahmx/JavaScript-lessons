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
