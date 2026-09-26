//IF STATEMENTS

//format of if statements

if (true) {
  console.log(`its true!`);
}

if (false) {
  console.log(`this is flase`);
}

const a = 10;
const b = 5;
if (a > b) {
  console.log(`${a} is greater than ${b}`);
}

if (a == b) {
}

if (a >= b) {
}

if (a <= b) {
}

if (a != b) {
  const x = 10;
  console.log(`${x} is 20`); //This only runs only in block level scope if the given variable if called outside the if function it doesnt run
}

//console.log (z);//this piece of code doesnt work since its called oustside its scope but if the variable was var instaed of const the code would have been exceuted

//SHORTHAND IF

if (a >= b) console.log(`${a}is greater than or equal to ${b}`);
else console.log(`This is false`);

//ELSE-IF AND NESTING

const d = new Date(10, 30, 2026, 15, 0, 0);
const hour = d.getHours();

if (hour < 12) {
  console.log(`Good Morning`);
} else if (hour < 18) {
  console.log(`Good Afternoon`);
} else {
  console.log(`Good Night`);
}

//NESTED IF

if (hour < 12) {
  console.log(`Good Morning`);
  if (hour === 6) {
    console.log(`Wake up`);
  }
} else if (hour < 18) {
  console.log(`Good Afternoon`);
} else {
  console.log(`Good Night`);
  if (hour >= 20) {
    console.log(`zzzzzzz`);
  }
}

//HAVING MUTIPLE IF CONDITIONS
if (hour >= 7 && hour <= 15) {
  console.log(`Its work time`);
} else {
  console.log(`Free time`);
}
