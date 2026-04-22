// This is a SINGLE-LINE COMMENT

/* This is a MULTI-LINE COMMENT 
The code below is an example STATEMENT )instruction/command)
Every statement ends with a SEMICOLON
*/
console.log("Welcome to JS!");

// VARIABLES are named storage containers for data

// DECLARE a variable using the keyword LET
let username;

//ASSIGN a value to a variable
username = "Tova Rehbein";

// DECLARE + ASSIGN in one line
let pokemon = "pikachu";
let luckyNum = 5;
luckyNum = 13;

// See the value stored in a variable
console.log(username);

// MATH OPERATIONS (with numbers)
let age = 16;
let ageInTen = age + 10;
let ageDogYears = age / 7;
console.log(age);
console.log(ageInTen);
console.log(ageDogYears);
// You can do math with +, -, *, /

// Combine 2 "literal" Strings with CONCATENATION
console.log("My Age is " + "age");
// Combine Strings with variables
console.log("My Age is " + age);
console.log("In ten years I will be " + ageInTen)
console.log("My age in dog years is " + ageDogYears)
// Usisng the plus sign with at least one "String"
// means you're combining (concatenating) not doing addition

// console.log is a built-in FUNCTION we use a lot
// TASK: display data in the console
console.log("I just used a function!");
// some functions need PARAMETERS (input)

// DECLARE (create) your own function
function skincare() {
    // STATEMENTS (actions) to execute for this routine
    console.log("1. Cleanse");
    console.log("2. Apply serums");
    console.log("3. Moisturize");
}
// CALL the function to use it!
skincare();
skincare(); // can run the function again

// 4 types of FUNCTIONS:
// input - yes or no? output - yes or no?

// SANDWICH - need input, provide output
// If you need input, list the (parameters)
function makeSandwich(filling, sauce, bread) {
    // put the ingredients together
    let sandwich;
    sandwich = filling + " and " + sauce + " on " + bread;
    // if you give output, use the word RETURN
    return sandwich; 
}

// using a function with input mean YOU need to provide arguments in the parenthesis
let mySandwich = makeSandwich("mozzarella", "pesto", "baguette");
console.log(mySandwich);