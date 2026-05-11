// Exercise 1: Destructuring assignment
let user = { name: "John", years: 30 };
const { name, years: age, isAdmin = false } = user;

// Exercise 2: Naming variables
let ourPlanetName = "Earth";
let currentUserName = "John";

// Exercise 3: Scoping result
// Result: Uncaught ReferenceError: sayHi is not defined
// Reason: The function sayHi is block-scoped inside the 'if' statement.

// Exercise 4: Object operations
let userObj = {};
userObj.name = "John";
userObj.surname = "Smith";
userObj.name = "Pete";
delete userObj.name;

// Exercise 5: Const objects
// Answer: Yes, it is possible.
// Reason: 'const' prevents reassigning the variable itself, but the properties of the object can still be modified.

// Exercise 6: Summing salaries
let salaries = { Fred: 100, Ted: 160, Ghaith: 130 };
let sum = 0;
for (let key in salaries) {
  sum += salaries[key];
}
let total = sum || 0;

// Exercise 7: Ternary operator
let result = (a + b < 4) ? 'Below' : 'Over';

// Exercise 8: Multiple ternary operators
let message = (login == 'Employee') ? 'Hello' :
              (login == 'Director') ? 'Greetings' :
              (login == '') ? 'No login' : '';