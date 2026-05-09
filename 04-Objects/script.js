/* 
  Path: vanilla-js-exercises/04-Objects/ٍscript.js
*/

// 1. إنشاء كائن يمثل كتاباً
const book = {
  title: "To Kill a Mockingbird",
  author: "Harper Lee",
  year: 1960
};

// طباعة تفاصيل الكتاب
console.log("--- Book Information ---");
console.log(`Title: ${book.title}`);
console.log(`Author: ${book.author}`);
console.log(`Year: ${book.year}`);

// ---

// 2. تعريف كائن يمثل شخصاً
const person = {
  name: "Raji",
  age: 30,
  gender: "Male"
};

// دالة تستقبل كائن الشخص كمعامل (Parameter)
function printPersonDetails(individual) {
  console.log("\n--- Person Information ---");
  console.log(`Name: ${individual.name}`);
  console.log(`Age: ${individual.age}`);
  console.log(`Gender: ${individual.gender}`);
}

// استدعاء الدالة وتمرير كائن person لها
printPersonDetails(person);