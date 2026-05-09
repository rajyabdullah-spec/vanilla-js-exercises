const car = {
  make: "Nissan",
  model: "Skyline GT-R R34",
  year: 1999,
  
  start: function() {
    console.log(`The ${this.make} ${this.model} is starting... Vroom Vroom! 🏎️`);
  },

  drive: function() {
    console.log(`The ${this.year} ${this.model} is now driving down the road.`);
  }
};

console.log("--- Car Instance Test ---");
car.start(); // استدعاء ميثود التشغيل
car.drive(); // استدعاء ميثود القيادة
