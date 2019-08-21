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

let myName = "Milvia";
let myAge = 30;

let ageField = "myAge";

let obj = {
  myName: "Dayana",
  myAge,
  greet() {
    console.log(`${this.myName}, ${this.myAge}`);
  }
};
console.log(obj);

obj.greet();

/** */

let obj1 = {
  myName: "Dayana",
  myAge,
  "greet me"() {
    //Al ser 2 palabras si se dejan sin las commillas, esto genera un error.
    console.log(`${this.myName}, ${this.myAge}`);
  }
};
obj1["greet me"]();

/** */

let obj2 = {
  myName: "Dayana",
  [ageField]: 16,
  "greet me"() {
    console.log(`${this.myName}, ${this.myAge}`);
  }
};
console.log(obj2[ageField]);

/**THE REST OPERATOR*/

let numbers = [1, 2, 3, 4, 5];

function sumUp(toAdd) {
  let result = 0;
  for (let i = 0; i < toAdd.length; i++) {
    result += toAdd[i];
  }
  return result;
}

console.log(sumUp(numbers));

/** */

function sumUp1(...toAdd) {
  console.log(toAdd);

  let result = 0;
  for (let i = 0; i < toAdd.length; i++) {
    result += toAdd[i];
  }
  return result;
}

console.log(sumUp1(100, 10, 20));

/** */

function sumUp2(...toAdd) {
  console.log(toAdd);
  let result = 0;
  for (let i = 0; i < toAdd.length; i++) {
    result += toAdd[i];
  }
  return result;
}

console.log(sumUp2(100, 10, "20"));

/*
 *THE SPREAD OPERATOR
 */

let numbers1 = [1, 2, 3, 4, 5];

console.log(...numbers1);
console.log(Math.max(...numbers1));

/*
 *THE FOR-OF-LOOP
 */

let testResults = [1.23, 1.1, 4.1];

for (let testResult of testResults) {
  console.log(testResult);
}

/*
 *TEMPLATE LITERALS
 */

let templateName = "Milvia";

let description = `Hello, I'm ${templateName + " !!!"}`;

console.log(description);

let templateName1 = "Milvia";

let description1 = `Hello, I'm \${templateName1 + " !!!"}`;

console.log(description1);

/*
 *DESTRUCTURING-ARRAYS
 *En google chrome no funciona este ejercicio!, pero al provarlo en https://jsbin.com/?js,console,output  FUNCIONA PERFECTO.
 */

// let numbers2 = [1, 2, 3];

// let [a, b] = numbers2;

// console.log(a);
// console.log(b);
// console.log(numbers2);
// /**El resultado es: */
// //1
// //2
// //[1, 2, 3]

// /**OTRA FORMA el resultado es undefined */

// let numbers22 = [1, 2, 3];

// let [a, b, c, d] = numbers22;

// console.log(d);

// /**OTRA FORMA */

// let numbers23 = [1, 2, 3];

// let [a, ...b] = numbers23;

// console.log(b); //[2, 3]

// /**OTRA FORMA */

// let numbers24 = [1, 2, "3"];

// let [a, ...b] = numbers24;

// console.log(b); //[2, "3"]

// /**OTRA FORMA */

// let numbers25 = [1, 2, "3"];

// let [a, b, c, d] = numbers25;

// console.log(d); //undefined

// /**OTRA FORMA */

// let numbers26 = [1, 2, "3"];

// let [a = "default", b, c, d = "default"] = numbers26;

// console.log(a); // 1

// /**OTRA FORMA */

// let numbers27 = [1, 2, "3"];

// let [a = "default", b, c, d = 1] = numbers27;

// console.log(a); // 1

// /**OTRA FORMA */

// let a = 5;
// let b = 10;

// [b, a] = [a, b];

// console.log(b); //5
// console.log(a); //10

// /**Numbers3 */

// let numbers3 = [1, 2, 3];

// let [a, , c] = numbers3;

// console.log(a, c);

// /**Numbers31 */

// let [a, b] = [1, 2, 3];

// console.log(a, b);

/*
 *Destructuring - Objects
 */

let obj3 = {
  name: "Milvia",
  age: 30,
  greet1: function() {
    console.log(`Hello there! `);
  }
};

//let { name, age } = obj3;
//console.log(name, age);

// let { name, greet1 } = obj3;
// greet1();

let { name, greet1: hello } = obj3;
hello();

/*
 *Destructuring - Sumary
 */
