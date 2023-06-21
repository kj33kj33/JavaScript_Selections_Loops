console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");

for(i = 1; i <= 100; i++) {
    if(i % 2 != 0) {
        console.log(i);
    }
}

// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");

for(i = 1; i <= 100; i++) {
    if(i % 3 == 0 && i % 5 == 0) {
        console.log(i + " | FIZZBUZZ");
    }
    else if(i % 3 == 0) {
        console.log(i + " | FIZZ");
    }
    else if(i % 5 == 0) {
        console.log(i + " | BUZZ");
    }
}

// Exercise 3 Section
console.log("EXERCISE 3: (while loop FIZZBUZZ)\n==========\n");

var number = 0;

while(number <= 100) {
    number++;
    if(number % 3 == 0 && number % 5 == 0) {
        console.log(number + " | FIZZBUZZ");
    }
    else if(number % 3 == 0) {
        console.log(number + " | FIZZ");
    }
    else if(number % 5 == 0) {
        console.log(number + " | BUZZ");
    }
}

console.log("EXERCISE 3: (do while loop FIZZBUZZ)\n==========\n");

number = 0;

do {
    number++;
    if(number % 3 == 0 && number % 5 == 0) {
        console.log(number + " | FIZZBUZZ");
    }
    else if(number % 3 == 0) {
        console.log(number + " | FIZZ");
    }
    else if(number % 5 == 0) {
        console.log(number + " | BUZZ");
    }
} while(number <= 100)

console.log("EXERCISE 3: (while loop ODDS)\n==========\n");

number = 0;

while(number < 100) {
    number++;
    if(number % 2 != 0) {
        console.log(number);
    }
}

console.log("EXERCISE 3: (do while loop ODDS)\n==========\n");

number = 0;

do {
    number++;
    if(number % 2 != 0) {
        console.log(number);
    }
} while(number < 100)

//Exercise 4 Section: Find Value
console.log("EXERCISE 4:\n==========\n");

let value = Math.round((Math.random() * 500)); 
// creates a random number between 0 and 500
let n = Math.round(Math.random() * (500 - 100) + 100); 
// creates a random number between 100 and 500

console.log("n = " + n + " | value = " + value);

let foundValue = false;

for(i = 0; i <= n; i++) {
    if(i == value) {
        console.log("Found value!");
        foundValue = true;
        break;
    }
}
if(foundValue == false) {
        console.log("Did not find value");
}

//Exercise 5 Section: Customized FIZZBUZZ
console.log("EXERCISE 4:\n==========\n");

let fizzDivisor = Math.round(Math.random() * (10 - 1) + 1);
//creates random number bewteen 1 and 10
let buzzDivisor = Math.round(Math.random() * (10 - 1) + 1);
//creates random number bewteen 1 and 10
let num = Math.round(Math.random() * (1000 - 1) + 1);
//creates random number bewteen 1 and 1000
let start = Math.round(Math.random() * (10 - 1) + 1);
//creates random number bewteen 1 and 10

console.log("Start number: " + start);
console.log("End number: " + num);
console.log("Fizz number: " + fizzDivisor);
console.log("Buzz number: " + buzzDivisor);

for(i = start; i <= num; i++) {
    if(i % fizzDivisor == 0 && i % buzzDivisor == 0) {
        console.log(i + " | FIZZBUZZ");
    }
    else if (i % fizzDivisor == 0) {
        console.log(i + " | FIZZ");
    }
    else if (i % buzzDivisor == 0) {
        console.log(i + " | BUZZ");
    }
}
