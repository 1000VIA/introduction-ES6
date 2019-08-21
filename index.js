let age0 = 27;
age0 = 29;
console.log("Mi primera edad", age0);

const AGES = [27, 29, 31];
ages = 29;
console.log("Mi array de edades", AGES);
AGES.push(25);
console.log("Mi array de edades", AGES);

const OBJ = {
  age: 27
};
console.log("Mi primer objeto", OBJ);
OBJ.age = 30;
console.log("Accediendo al dato de mi objeto", OBJ);

/*
 *Hoisting with 'let' and 'const'
 */

// ageH = 27;
// console.log('Mi primer HOISTING', ageH);

// let ageH;

function doSmth() {
  ageS = 27;
}

let ageS;
doSmth();
console.log("Accediendo a la edad de mi función", ageS);

/*
 * Fat arrow functions
 */

function fnF() {
  console.log("Hello!");
}
fnF();
var fn0 = () => "Hello";
console.log(fn0());

var fn1 = () => {
  let a = 2;
  let b = 3;
  return a + b;
};
console.log(fn1());

var fn2 = (a, b) => {
  return a + b;
};
console.log(fn2(3, 11));

var fn3 = (a, b) => a + b;

console.log(fn3(3, 8));

var fn4 = a => a + 5;

console.log(fn4(3));

setTimeout(() => console.log("Hello")), 2000;

/*
 *Fat Arrow Function & 'this'
 */

let button = document.querySelector("button");

var fn_this2 = () => console.log(this);

function fn_this() {
  console.log("Prueba", this);
}

button.addEventListener("click", fn_this2);

/*
 *Default Parameters min-32:23
 */
function isEqualToV(number = 10, compare = 10) {
  return number == compare;
}
console.log("Mi valor verdadero = ", isEqualToV());

function isEqualToF(number = 10, compare) {
  return number == compare;
}
console.log("Mi valor falso = ", isEqualToF());

function isEqualToU(number = 10, compare) {
  console.log(number);
  console.log("Mi valor undefined", compare);

  return number == compare;
}
console.log(isEqualToU(11));

function isEqualToU1(number, compare = 10 / 2) {
  console.log(number);
  console.log(compare);

  return number == compare;
}
console.log(isEqualToU1(11));

function isEqualToU11(number, compare = number) {
  console.log(number);
  console.log(compare);

  return number == compare;
}
console.log(isEqualToU11(11, 20));

let a = 100;
function isEqualToU11a(number, compare = a) {
  console.log(number);
  console.log(compare);

  return number == compare;
}
console.log(isEqualToU11a(11));

/**ERROR */

function isEqualToU11EF(number = 10, compare = number) {
  console.log(number);
  console.log(compare);

  return number == compare;
}
console.log("Funciona", isEqualToU11EF());

// function isEqualToU11E(number = compare, compare = 10) {
//   console.log(number);
//   console.log(compare);

//   return number == compare;
// }
// console.error("Error No funciona", isEqualToU11E());

/*
 *Object Literal Extensions min-38:36
 */
