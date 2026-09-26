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
