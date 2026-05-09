const favoriteFruits = ['Apple', 'Banana', 'Mango', 'Orange'];
for (let i = 0; i < favoriteFruits.length; i++) {
  console.log(favoriteFruits[i]);
}


function calculateAverage(numbers) {
  let sum = 0;

  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }

  return sum / numbers.length;
}

const myNumbers = [10, 20, 30, 40, 50];
const average = calculateAverage(myNumbers);

console.log("The average is: " + average);



const numbersList = [12, 45, 7, 89, 23, 56];
let largest = numbersList[0];
for (let i = 1; i < numbersList.length; i++) {
  if (numbersList[i] > largest) {
    largest = numbersList[i];
  }
}

console.log("The largest number is: " + largest);


const words = ['JavaScript', 'is', 'a', 'powerful', 'language.'];
let sentence = '';
for (let i = 0; i < words.length; i++) {
  sentence += words[i] + ' ';
}
console.log("Full Sentence: " + sentence.trim());



function checkNameExists(namesArray, targetName) {
  for (let i = 0; i < namesArray.length; i++) {
    if (namesArray[i] === targetName) {
      return true;
    }
  }
  return false; 
}

const students = ['Raji', 'Ahmed', 'Carla', 'Sara'];
console.log("Is Carla in the list? " + checkNameExists(students, 'Carla')); 
console.log("Is John in the list? " + checkNameExists(students, 'John'));



const evenNumbers = [];
for (let i = 1; i <= 20; i++) {
  if (i % 2 === 0) {
    evenNumbers.push(i);
  }
}

console.log("Even numbers from 1 to 20:");
console.log(evenNumbers);