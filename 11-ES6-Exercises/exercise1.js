// --- Initial Definitions for Testing ---
let a = 1; 
let b = 2;
let login = 'Employee';

// Exercise 1: Destructuring
let user1 = { name: "John", years: 30 };
const { name, years: age, isAdmin = false } = user1;
console.log("Ex 1 - Destructuring:", { name, age, isAdmin }); //

// Exercise 2: Naming
let ourPlanetName = "Earth";
let currentUserName = "John";
console.log("Ex 2 - Names:", ourPlanetName, currentUserName); //

// Exercise 4: Object Operations
let user4 = {};
user4.name = "John";
user4.surname = "Smith";
user4.name = "Pete";
delete user4.name;
console.log("Ex 4 - Object after delete:", user4); //

// Exercise 5: Const Objects
const user5 = { name: "John" };
user5.name = "Pete";
console.log("Ex 5 - Const object modified:", user5.name); //

// Exercise 6: Sum Salaries
let salaries = { Fred: 100, Ted: 160, Ghaith: 130 };
let sum = 0;
for (let key in salaries) { sum += salaries[key]; }
console.log("Ex 6 - Total Salaries:", sum || 0); //

// Exercise 7: Ternary
let result = (a + b < 4) ? 'Below' : 'Over';
console.log("Ex 7 - Ternary Result:", result); //

// Exercise 8: Multiple Ternary
let message = (login == 'Employee') ? 'Hello' :
              (login == 'Director') ? 'Greetings' :
              (login == '') ? 'No login' : '';
console.log("Ex 8 - Message:", message); //