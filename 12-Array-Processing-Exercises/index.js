console.log("%c--- Exercise 1: filterRange ---", "color: #007bff; font-weight: bold;");
function filterRange(arr, a, b) {
    return arr.filter(item => (item >= a && item <= b));
}
let numbers = [5, 3, 8, 1];
console.log("Filtered [1-4]:", filterRange(numbers, 1, 4));

console.log("%c--- Exercise 2: Map to Names ---", "color: #007bff; font-weight: bold;");
let users = [
    { name: "John", age: 25 },
    { name: "Pete", age: 30 },
    { name: "Mary", age: 28 }
];
let names = users.map(user => user.name);
console.log("Names Array:", names);

console.log("%c--- Exercise 3: Average Age ---", "color: #007bff; font-weight: bold;");
function getAverageAge(usersList) {
    let totalAge = usersList.reduce((acc, user) => acc + user.age, 0);
    return totalAge / usersList.length;
}
console.log("Average Age:", getAverageAge(users));