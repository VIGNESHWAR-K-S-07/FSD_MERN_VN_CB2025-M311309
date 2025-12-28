let num = 50;
console.log(`your value ${num}`);
if (num > 0) {
  console.log("Positive");
} else if (num < 0) {
  return console.log("Negative");
} else return console.log("Zero");

console.log(num % 2 === 0 ? "Even" : "Odd");
if (num % 3 === 0 && num % 5 === 0) console.log("Divisible by 3 and 5");
