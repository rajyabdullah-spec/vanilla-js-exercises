// Part 1: Sum Function
function calculateSum(num1, num2) {
  return num1 + num2;
}

// Testing the function
console.log(calculateSum(5, 10));  // Output: 15
console.log(calculateSum(22, 8));  // Output: 30


// Part 2: Reverse String Function
// سنستخدم الـ Arrow Function هنا لتظهر احترافيتك (Refactoring)
const reverseString = (text) => {
  return text.split("").reverse().join("");
};

// Testing the function
console.log(reverseString("hello")); // Output: "olleh"
console.log(reverseString("Raji"));  // Output: "ijaR"