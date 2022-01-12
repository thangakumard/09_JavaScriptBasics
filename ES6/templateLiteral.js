///Template literals are literals delimited with backticks (`), allowing embedded expressions called substitutions.
console.log('string text line 1\n' +
'string text line 2');
//can be written as

console.log(`string text line 1
string text line 2`);


let a = 5;
let b = 10;
console.log('Fifteen is ' + (a + b) + ' and\nnot ' + (2 * a + b) + '.');
//can be written as
console.log(`Fifteen is ${a + b} and
not ${2 * a + b}.`);