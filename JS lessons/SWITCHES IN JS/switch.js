// SWITCHES IN JS

//SWITCHES ARE NOTHING BUT A LOOP WITH A MULYILE CASES

const d = new Date(2026, 1, 26, 8, 0, 0);
const month = d.getMonth();

switch (month) {
  case 1:
    console.log(`Its January`);
    break;
  case 2:
    console.log(`Its febuary`);
    break;
  case 3:
    console.log(`Its March`);
    break;
  default:
    console.log(`Its not jan,feb nor march`);
}

//CALCULATOR CHALLENGE

function calculator(num1, num2, operator) {
  let result;

  switch (operator) {
    case `+`:
      result = num1 + num2;
      break;
    case `-`:
      result = num1 - num2;
      break;
    case `*`:
      result = num1 * num2;
      break;
    case `/`:
      result = num1 / num2;
      break;

    default:
      result = `Invalid operator`;
  }
  console.log(result);
  return result;
}

calculator(2, 6, `+`);

function add(num1, num2) {
  const result = num1 + num2;
  console.log(result);
  return result;
}
add(3, 6);

//TRUTHY OR FALSY VALUES

//FALSY VAULES
//false
//0
//"" or `` empty string
//null
//undefined
//NaN

//truthy vaules
//everything else that is not falsy
//true
//"0"
//" " space in a string
//[] empty array
//{} empty objects
//function(){} empty functions

//LOGICAL OPERATORS

//AND && ONLY WORKS WHEN THE BOTH OF THR CONDITION IS TRUE
//IT USALLY PRINT SFALSY VAULE OR THE LAST VAULE

const num = 10 && 20;
const num1 = 0 && 10;
console.log(num);
console.log(num1);

//or operator \\

//WORKS WHEN ONLY ONE OF THE CONSITION IS TRUE
//IT PRINTS OUT THE FIRST TRUE VAULE OR THE LAST

const a = 2 || 9;
console.log(a);

//TRENARY OPERATOR

const age = 20;
if (age >= 18) {
  console.log(`YOU ARE  ELEGIBLE TO VOTE! `);
} else {
  console.log(`YOU ARE NOT ELEGIBLE TO VOTE!`);
}

//how to simplify the if condition with  the trenary operartor

age >= 18
  ? console.log(`YOU ARE ELEGIBLE TO VOTE!`)
  : console.log(`YOU ARE NOT ELEIGIBLE TO VOTE !`);

//ASSIGNING A CONDITIONAL VAULE TO THE VARIABLE

const canVote = age >= 18 ? `YOU CAN VOTE ` : `YOU CAN NOT VOTE`;
console.log(canVote);

//

const auth = true;

const redirect = auth
  ? (alert(`Welcome to the dashboard`), `/dashboard`)
  : (alert(`Access Denied`), `/login`);
console.log(redirect);
