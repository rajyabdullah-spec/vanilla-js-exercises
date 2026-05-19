// Exercise 1: Person Class
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    introduce() {
        return `Hi, my name is ${this.name} and I am ${this.age} years old.`;
    }
}

// Exercise 2: Understanding 'this' with callback
const person1 = new Person("Raji", 26);

function describePerson(callback) {
    callback.call(person1);
}

function logInfo() {
    console.log(this.introduce());
}

describePerson(logInfo);

// Exercise 3: Promises
function wait(ms) {
    return new Promise((resolve) => {
        setTimeout(() => resolve(`Waited for ${ms} ms`), ms);
    });
}

wait(2000).then(console.log);