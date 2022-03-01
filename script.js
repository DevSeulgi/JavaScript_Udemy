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


// 18. Taking Decisions: if / else Statements

const age = 15;

if(age >= 18) {
    console.log(`Sarah can start driving license 🚗`);
} else {
    const yearsLeft = 18 - age;
    console.log(`Sarah is too young. Wait another ${yearsLeft} years :)`)
}


const birthYear = 2021;

let century;
if(birthYear<= 2000) {
    century = 20;
} else {
    century = 21;
}

console.log(century);

// 19. CODING CHALLENGE #2

1. Print a nice output to the console, saying wo has the higher BMI. The message can be either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"

2. Use a template string to include the BMI values in the outputs. Example: "Mark's BMI (28.3) is higher than John's (23.9)!"

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

console.log(BMIMark, BMIJohn);
console.log(`Mark's BMI is ${BMIMark}`)
console.log(`John's BMI is ${BMIJohn}`)

if(BMIMark > BMIJohn) {
    console.log(`Mark's BMI (${BMIMark}) is higher than John's (${BMIJohn})!`)
} else {
    console.log(`John's BMI (${BMIJohn}) is higher than Mark's (${BMIMark})!`)
}


// 20. Type Conversion and Coercion

// type conversion
const inputYear = '1991';
console.log(Number(inputYear), inputYear);
console.log(Number(inputYear) + 18);

console.log(Number('Jonas'));
// NaN = Not a Number.
console.log(typeof NaN);
// typeof NaN print to number.
console.log(String(23), 23);
// JS can typed number, string and Boolean.

// type coercion
console.log('I am ' + 23 + ' years old');
console.log('I am ' + '23' + ' years old');
console.log('I am ' + String(23) + ' years old');

console.log('23' - '10' - 3);
// printed 10
console.log('23' + '10' + 3);
// printed 23103
console.log('23' * '2');
// printed 46
console.log('23' / '2');
// printed 11.5

let n = '1' + 1 ;
n = n - 1;
console.log(n);
// printed 10



// 21. Truthy and Falsy Values
// 5 falsy values: 0, '', undefined, null, NaN

console.log(Boolean(0));    //false//
console.log(Boolean(undefined));    //false//
console.log(Boolean('Seulgi'));     //true//
console.log(Boolean({}));   //true//
console.log(Boolean(''));    //false//

const money = 100;
if(money) {
    console.log("Don't spend it all :(");
} else {
    console.log('You should get a job!');
}

let height;
if(height) {
    console.log('YAY! Height is defined');
} else {
    console.log('Height is UNDEFINED');
}



// 22. Equality Operators: == vs. ===

const age = '18';
if(age === 18) console.log('You just became an adult :D (strict)');
if(age == 18) console.log('You just became an adult :D (loose)');
// 되도록 === 을 사용하고 == 사용은 지양하자

    // 18 === 18
    // true
    // 18 === 19
    // false
    // '18' == 18
    // true
    // '18' === 18
    // false

const favorite = Number(prompt("What's your favorite number?"));
console.log(favorite);
console.log(typeof favorite);

if (favorite === 22) { // 22 === 23 FALSE
    console.log('Cool! 22 is an amazing number!')
} else if(favorite === 7) {
    console.log('7 is also a cool number')
} else if (favorite === 9) {
    console.log('9 is also a cool number')
} else {
    console.log('Number is not 22 or 7 or 9')
}

if(favorite !== 22) console.log('why not 22?')
//! means not
*/



// 23. Boolean Logic
// 24. Logical Operators

const hasDriversLicense = true; // A
const hasGoodVision = false; // B

console.log(hasDriversLicense && hasGoodVision); // false
console.log(hasDriversLicense || hasGoodVision); // true
console.log(!hasGoodVision); // false

// const shouldDrive = hasDriversLicense && hasGoodVision;

// if(hasDriversLicense && hasGoodVision) {
//     console.log('Sarah is able to drive!')
// } else {
//     console.log('Someone else should drive...')
// }

const isTired = true; // C
console.log(hasDriversLicense && hasGoodVision && isTired);

if(hasDriversLicense && hasGoodVision && !isTired) {
    console.log('Sarah is able to drive!');
} else {
    console.log('Someone else should drive...');
} // Someone else should drive...