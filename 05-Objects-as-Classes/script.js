/* 
  Path: vanilla-js-exercises/05-Objects-as-Classes/main.js
*/

// 1. إنشاء كائن يمثل "Class" للسيارة مع الخصائص والميثود الأساسي
const car = {
  make: "Nissan",
  model: "Skyline GT-R R34",
  year: 1999,
  
  // ميثود لتشغيل السيارة
  start: function() {
    console.log(`The ${this.make} ${this.model} is starting... Vroom Vroom! 🏎️`);
  },

  // 2. تمديد الكائن بميثود للقيادة (Drive)
  drive: function() {
    console.log(`The ${this.year} ${this.model} is now driving down the road.`);
  }
};

// اختبار الميثودز وطباعة الرسائل
console.log("--- Car Instance Test ---");
car.start(); // استدعاء ميثود التشغيل
car.drive(); // استدعاء ميثود القيادة