//The every() method tests whether all elements in the array pass the test implemented by the provided function.
//Syntax :arr.every(callback[, thisArg])
// Return : true / false
/************************** 1 **************************/
//Testing size of all array elements
function isBigEnough(element, index, array) {
    return element >= 10;
  }
  [12, 5, 8, 130, 44].every(isBigEnough);   // false
  [12, 54, 18, 130, 44].every(isBigEnough); // true

//Using arrow functions
[12, 5, 8, 130, 44].every(x => x >= 10); // false
[12, 54, 18, 130, 44].every(x => x >= 10); // true
