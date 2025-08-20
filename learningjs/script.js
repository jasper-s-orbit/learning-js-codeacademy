//learning about properties
console.log('Hello'.length); // Prints 5
console.log('Teaching the world how to code'.length); // Prints 30
console.log('JavaScript'.length); // Prints 10



//learning about methods
console.log('Hello'.toUpperCase()); // Prints 'HELLO'
console.log('Teaching the world how to code'.toLowerCase()); // Prints 'teaching the world how to code'
console.log('JavaScript'.indexOf('Script')); // Prints 4
console.log('JavaScript'.indexOf('Python')); // Prints -1 (not found)
console.log('Hello'.replace('Hello', 'Hi')); // Prints 'Hi'
console.log('Teaching the world how to code'.slice(0, 7)); // Prints 'Teaching'
console.log('JavaScript'.substring(0, 10)); // Prints 'JavaScript'  
console.log('Hello'.charAt(0)); // Prints 'H'
console.log('Teaching the world how to code'.split(' ')); // Prints ['Teaching', 'the', 'world', 'how', 'to', 'code']
console.log('JavaScript'.includes('Script')); // Prints true
// Use .toUpperCase() to log 'Codecademy' in all uppercase letters
console.log('Codecademy'.toUpperCase());

// Use a string method to log the following string without whitespace at the beginning and end of it.
console.log('    Remove whitespace   '.trim());

// Use .indexOf() to log the index of the first occurrence of 'c' in 'Codecademy'
console.log('Codecademy'.indexOf('c'));

// Use .replace() to log 'Codecademy' with 'Code' replaced by 'Learn'
console.log('Codecademy'.replace('Code', 'Learn'));

// Use .slice() to log the first 4 characters of 'Codecademy'
console.log('Codecademy'.slice(0, 4));



//learning about numbers
//built-in objects
console.log(Math.random()); // Prints a random number between 0 and 1
console.log(Math.PI); // Prints the value of π (approximately 3.14159)
console.log(Math.random() * 50); // Prints a random number between 0 and 50, may be a decimal
console.log(Math.floor(Math.random() * 50)); // Prints a random integer between 0 and 49

console.log(Math.random() * 100); // Prints a random number between 0 and 100, may be a decimal
console.log(Math.floor(Math.random() * 100)); // Prints a random integer between 0 and 99
console.log(Math.ceil(43.8)); // Prints 44 (rounds up)
console.log(Math.floor(43.8)); // Prints 43 (rounds down)
console.log(Number.isInteger(2017)); // Prints true (2017 is an integer)
console.log(Number.isInteger(2017.5)); // Prints false (2017.5 is not an integer)




