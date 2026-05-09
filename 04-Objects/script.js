const book = {
  title: "To Kill a Mockingbird",
  author: "Harper Lee",
  year: 1960
};

console.log("--- Book Information ---");
console.log(`Title: ${book.title}`);
console.log(`Author: ${book.author}`);
console.log(`Year: ${book.year}`);


const person = {
  name: "Raji",
  age: 30,
  gender: "Male"
};

function printPersonDetails(individual) {
  console.log("\n--- Person Information ---");
  console.log(`Name: ${individual.name}`);
  console.log(`Age: ${individual.age}`);
  console.log(`Gender: ${individual.gender}`);
}

printPersonDetails(person);
