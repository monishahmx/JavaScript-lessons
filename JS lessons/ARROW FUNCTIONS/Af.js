//ARROW FUNCTIONS IN JS

//ARROW DECLAIRATION SYNTAX

const add = (a, b) => {
  return a + b;
};
console.log(add(1, 2));

//EVEN SIMPLIER WAY
//IMPLICIT RESTUEN

const subtract = (m, n) => m - n;
console.log(subtract(48, 33));

//single param
//can leave off () witha a single param

const double = (a) => a * 3;
console.log(double(9));

//RETURNING AN OBJECT
//adding () is important when arrowing the function

const driver = () => ({
  name: `max verstappen`,
  team: `RED BULL RACING`,
  ID: 3,
});
console.log(driver());

//IMMEDIATLEY INVOKED FUNCTION experssions

//THE CALL STACK

//STACK OF FUNCTIONS TO BE EXECUTED
//MANAGES THE EXECUTION CONTEXTS
//STACKS ARE LAST IN FIRST OUT //LIFO
