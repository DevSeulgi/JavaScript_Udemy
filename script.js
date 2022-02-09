/*
let js = 'amazing';
console.log(40+8+23-10);

// Values and Variables
console.log("JONAS");
console.log(23);

let firstName = "JONAS";

console.log(firstName);
console.log(firstName);
console.log(firstName);

// let function = 27;
// SyntaxError
let _function = 27;
let $function = 27;

let person = 'jonas'
let PI = 3.1415;
// constants write UpperCase

let myFirstJob = "Programmer";
let myCurrentJob = "Teacher";
// Variable name need to be easier to understand

console.log(myFirstJob);
console.log("myFirstJob");

let javascriptIsFun = true;
console.log(javascriptIsFun);

// console.log(typeof true);
console.log(typeof javascriptIsFun);
// console.log(typeof 23);
// console.log(typeof 'jonas');

javascriptIsFun = 'YES!';
console.log(typeof javascriptIsFun);

let year;
console.log(year);
console.log(typeof year);
year = 1995;
console.log(typeof year);

console.log(typeof null);


let age = 30;
age = 31;
console.log(age);

const birthYear = 1995;
// birthYear = 2000;
// const cannot mutate

// const jog;
// const cannot assign later

var job = "programmer";
job = 'teacher';

familyName = "Park";
console.log(typeof familyName);


// Math operator
const now = 2022
const ageSeulgi = now - 1995 ;
const ageHyein = now - 1993;
console.log(ageSeulgi, ageHyein);

console.log(ageSeulgi * 2, ageHyein / 10, 2 ** 3);
// 2 ** 3 mean 2 to the power of 3 = 2 * 2 * 2

const firstName = 'Park';
const lastName = 'Seulgi';
console.log(firstName + ' ' + lastName);
console.log(firstName, lastName);

//Assignment operator
let x = 10 + 5; // 15
x += 10; // x = x + 10 = 25
x *= 4; // x = x * 4 = 100
x++; // x = x + 1
x--; // x = x - 1
console.log(x);

// Comparison operator
console.log(ageSeulgi > ageHyein); // >, <, >=, <=
console.log(ageHyein >= 29);

const isFullAge = ageSeulgi >= 27;
console.log(now - 1993 > now - 1995);

const averageAge = (ageSeulgi + ageHyein) / 2
console.log(averageAge);



// LECTURE: Values and Variables
// 1. Declare variables called 'country', 'continent' and 'population' and
// assign their values according to your own country (population in millions)
// 2. Log their values to the console

let country = 'KOREA'
let continent = 'ASIA'
let population = 5178

console.log(country)
console.log(continent)
console.log(population)

// LECTURE: Data Types
// 1. Declare a variable called'isIsland'and set its value according to your country. The variable should hold a Boolean value. Also declare a variable 'language', but don't assign it any value yet
// 2. Log the types of'isIsland','population','country'and'language' to the console

let isIsland = false;
let language;

console.log(typeof isIsland);
console.log(typeof population);
console.log(typeof country);
console.log(typeof language);

// LECTURE: let, const and var
// 1. Set the value of'language'to the language spoken where you live(some countries have multiple languages, but just choose one)
// 2. Think about which variables should be const variables(which values will never change, and which might change?). Then, change these variables to const.
// 3. Try to change one of the changed variables now, and observe what happens

const myLanguage = 'Korean';

// LECTURE: Basic Operators
// 1. If your country split in half,and each half would contain half the population, then how many people would live in each half?
// 2. Increase the population of your country by 1 and log the result to the console
// 3. Finland has a population of 6 million. Does your country have more people than
// Finland?
// 4. The average population of a country is 33 million people. Does your country
// have less people than the average country?
// 5. Based on the variables you created, create a new variable 'description'
// which contains a string with this format: 'Portugal is in Europe, and its 11 million people speak portuguese'

console.log(population / 2);

population ++;
console.log(population);

const finlandPopulation = 6
console.log(population > finlandPopulation);

let averagePopulation = 33
console.log(population < averagePopulation);

let myDescription = country + ' is in ' + continent + ', and its ' + population + ' million people speak ' + myLanguage
console.log(myDescription);

// Coding Challenge #1

// TEST DATA 1
// const massMark = 78;
// const heightMark = 1.69;
// const massJohn = 92;
// const heightJohn = 1.95;

// TEST DATA 2
const massMark = 95;
const heightMark = 1.88;
const massJohn = 85;
const heightJohn = 1.76;

// BMI CALCULATOR
const BMIMark = massMark / heightMark ** 2;
const BMIJohn = massJohn / (heightJohn * heightJohn);
const markHigherBMI = BMIMark > BMIJohn;

console.log(BMIMark, BMIJohn, markHigherBMI);

// 17. Strings and Template Literals

const firstName = 'Park'
const job = 'student'
const birthYear = 1995;
const year = 2022;

const Park = "I'm " + firstName + ", a " + (year - birthYear) + ' years old ' + job + '!';
console.log(Park);

// ES6 Template Literals
const parkNew =`I'm ${firstName}, a ${year - birthYear} years old ${job}!`;
console.log(parkNew);

console.log(`Just a regular string...`)

console.log('String with \n\
multiple \n\
lines')

console.log(`String with
multiple
lines`)
*/


// 18. Taking Decisions: if / else Statements

const age = 19;
const isOldEnough = age >= 18;

if(isOldEnough) {
    console.log('Sarah can start driving license 🚗')
}