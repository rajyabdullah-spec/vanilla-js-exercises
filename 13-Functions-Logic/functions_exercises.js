// Exercise 1: checkAge
const checkAge = age => (age > 18) ? true : confirm('Do you have your parents permission?');

// Exercise 2: pow(x, n)
const pow = (x, n) => {
  let result = x;
  for (let i = 1; i < n; i++) {
    result *= x;
  }
  return result;
};

// Exercise 3: ask
const ask = (question, yes, no) => confirm(question) ? yes() : no();

// Exercise 4: calculator
let calculator = {
  read() {
    this.a = +prompt('a?', 0);
    this.b = +prompt('b?', 0);
  },
  sum() {
    return this.a + this.b;
  },
  mul() {
    return this.a * this.b;
  }
};

// Exercise 5: min(a, b)
const min = (a, b) => (a < b) ? a : b;

// --- Execution for Console (F12) ---
console.log("--- Exercise 1: checkAge(20) ---");
console.log(checkAge(20));

console.log("--- Exercise 2: pow(3, 2) ---");
console.log(pow(3, 2));

console.log("--- Exercise 5: min(5, 10) ---");
console.log(min(5, 10));

// Exercise 4 Test (Uncomment to test)
// calculator.read();
// console.log("Sum:", calculator.sum());
// console.log("Mul:", calculator.mul());