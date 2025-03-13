const a = [1, 2, 3, 4];
const b = [4, 6, 9, 8];
const c = a;
// Find Equality
console.log(a === b); // true
console.log(c === b); // true
console.log(c === a); // true

let arraysEqual = true;
console.log("forEach start");
a.forEach((aItemInPosition, index) => {
  console.log(index, aItemInPosition);
  const bItemInPosition = b[index];
  if (aItemInPosition != bItemInPosition) {
    arraysEqual = false;
  }
});
console.log("forEach end");
console.log("Arrays Equal ", arraysEqual);

c.push(5);
console.log("a", a);
console.log("c", c);

const obj1 = {
  name: "a",
};
const obj2 = {
  name: "a",
};

console.log(obj1 == obj2);
const obj3 = obj1;

obj3.name = "Bekhzod";

console.log("obj1", obj1);
console.log("obj3", obj3);

const num1 = 10;
const num2 = 10;
let num3 = num1;

console.log(num1 === num2);

num3 = 20;
console.log("num1", num1);
console.log("num3", num3);
