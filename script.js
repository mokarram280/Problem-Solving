
//problem solving part 1

// question no 1:
let carName = "volvo";
//console.log(carName);

// question no 2:
//On one single line, declare three variables with the following names and values:
let firstName = "John";   // (firstName.) variable name
let lastName = "Doe"; // ("Doe".) variable values
let age = 35; // (age and 35.) variable name and values

// question no 3:
//Use the correct assignment operator that will result in x being 50 (same as x = x * y). 
x = 10;
y = 5;
x = x * y;// 50.

// question no 4:
//Use comments to describe the correct data type of the following variables:
let length = 16; // number type.
let listName = "Johnson"; // string type.

const a = {
  firstName: "John",  
  lastName: "Doe"
};    // object type.

// question no 5:
// Execute the function named myFunction.
 function myFunction() {
  alert("Hello World!");
}
myFunction();

// question no 6:
// Create an object called person with name = John, age = 50, Then,access the object to alert("John is 50").
const person = {
    name:'Jhon',
    age:50
};
alert("Jhon is 50");

// question no 7:
//The <button> element should do something when someone clicks on it. Try to fix it!
alert("Hello! Hablu Programmer Team");

// question no 8:
// 1. Alert the number of items in an array, using the correct Array property: 
const cars = ["Volvo", "Jeep", "Mercedes"];
alert(cars.length);

// 2. Change the first item of Brand to "Ford".
const Brand = ["Volvo", "Jeep", "Mercedes"];
Brand[0] = "Ford";
console.log(Brand);


// question no 9:
let random = Math.random();
// console.log(random);

let max = Math.max(10,20);
// console.log(max);

let square = Math.sqrt(9);
// console.log(square);

// question no 10:
//1. Choose the correct comparison operator to alert true, when x is greater than y. 
x = 10;
y = 5;
alert( x > y); // true.

// 2. Choose the correct conditional (ternary) operator to alert "Too young" if age is less than 18, 
//  otherwise alert "Old enough".

let agee = 18;
let man =(agee < 18) ? "Too young" : "Old enough";
alert("Old enough");



//Problem solving part 2

// question no 1:
function celsiusToFahrenheit(celsius) {
    return (celsius* (9 / 5) + 32);
  };
  
  console.log(celsiusToFahrenheit(0)); // 32
  console.log(celsiusToFahrenheit(25)); // 77
  
// question no 2:
function isEven(num) {
    return num % 2 == 0;
  };
  
  console.log(isEven(4)); // true
  console.log(isEven(7)); // false
  
// question no 3:
function sum(a, b) {
    return a + b;
  };
  
  console.log(sum(3, 4)); // 7
  console.log(sum(10, 20)); // 30
  
// question no 4:
function findSmallestNum(arr) {
    let min = arr[0];
    for(let i = 0; i < arr.length; i++){
        let element = arr[i];
        if( element < min ){
            min = element
        }
    }
    return min;
  };
  
  console.log(findSmallestNum([3, 5, 1, 9])); // 1
  console.log(findSmallestNum([-1, -5, 0, 10])); // -5

// question no 5:
  function countVowels(str) {
    let vowels = 'aeiouAEIOU';
    let vowelMatches = str.match(/[aeiouAEIOU]/g);
    return vowelMatches ? vowelMatches.length : 0;
  };
  
  console.log(countVowels("hello world")); // 3
  console.log(countVowels("Javascript")); // 3
  
// question no 6:
function getFirstElement(arr) {
    const getArray = arr.at(0);
    return getArray;
  };
  
  console.log(getFirstElement([1, 2, 3])); // 1
  console.log(getFirstElement(["a", "b", "c"])); // "a"
  
// question no 7:
function isArrayEmpty(arr) {
    return Array.isArray(arr) && arr.length === 0;
  };
  
  console.log(isArrayEmpty([])); // true
  console.log(isArrayEmpty([1, 2, 3])); // false
  
// question no 8:
function factorialize(num) {
    if (num === 0) { 
        return 1; 
    } 
    else { 
        return num * factorialize( num - 1 ); 
    }
  };
  
  console.log(factorialize(5)); // 120
  console.log(factorialize(7)); // 5040

// question no 9:
function reverseString(str) {
    let arr = str.split("");
    arr.reverse();
    return arr.join("");
  };
  
  console.log(reverseString("hello")); // "olleh"
  console.log(reverseString("world")); // "dlrow"
  
// question no 10:
function toLowerCase(str) {
    return str.toLowerCase();
  };
  
  console.log(toLowerCase("HELLO WORLD")); // "hello world"
  console.log(toLowerCase("JavaScript")); // "javascript"
  
// question no 11:
function stringLength(str) {
    let count = 0;
    for(let char of str) {
        count++;
    }
    return count;
  };
  
  console.log(stringLength("hello")); // 5
  console.log(stringLength("world")); // 5
  
// question no 12:
function mergeArrays(arr1, arr2) {
    for(let i = 0; i < arr2.length; i++) {
        arr1.push(arr2[i]);
      }
    return arr1;
  };
  
  console.log(mergeArrays([1, 2, 3], [4, 5, 6])); // [1, 2, 3, 4, 5, 6]
  console.log(mergeArrays(["a", "b"], ["c", "d"])); // ["a", "b", "c", "d"]
  
// question no 13:
function getLastElement(arr) {
    return arr[arr.length - 1];
  };
  
  console.log(getLastElement([1, 2, 3])); // 3
  console.log(getLastElement(["a", "b", "c"])); // "c"
  
// question no 14:
function getFirstCharacter(str) {
    return str.charAt(0);
  };
  
  console.log(getFirstCharacter("hello")); // "h"
  console.log(getFirstCharacter("world")); // "w"
  
// question no 15:
function sumArray(arr) {
    let total = 0;
    for(let num of arr){
        total += num;
    }
    return total;
  };
  
  console.log(sumArray([1, 2, 3, 4])); // 10
  console.log(sumArray([-1, -2, -3, -4])); // -10
  console.log(sumArray([1.5, 2.5, 3.5])); // 7.5
  