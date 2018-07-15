const first = [1,2,3];
const second = [4,5,6];

//Merging arrays 
// You can insert new elements while merging arrays
let combined = first.concat(second);
console.log(combined);

combined = [...first, ...second];
console.log(combined);

combined = [...first, 'a', ...second,'b'];
console.log(combined);

//cloning arrays
const clone = [...first];

//combining Objects
const x1 = {name :'kumar'};
const x2 = {job : 'Software Developer'};
//const x3 = {...x1,...x2, location : 'USA'};
//console.log(x3);


/******** TO REPLACE APPLY ********/
function myFunction1(x, y, z) {
    console.log(x, y ,z);
 }
var args = [0, 1, 2];
myFunction1.apply(null, args);
//******CAN BE WRITTEN AS *******/
function myFunction2(x, y, z) {
    console.log(x, y ,z);
 }
var args = [0, 1, 2];
myFunction2(...args);
//*******************************/

var numbers = [1,2,3,4];
console.log(Math.max.apply(null,numbers)); // without spread operator
console.log(Math.max(...numbers));

