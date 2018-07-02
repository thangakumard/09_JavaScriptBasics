/*********
 * Syntax
    arr.findIndex(callback[, thisArg])
Parameters
callback
    Function to execute on each value in the array, taking three arguments:
element
    The current element being processed in the array.
indexOptional
    The index of the current element being processed in the array.
arrayOptional
    The array findIndex was called upon.
thisArgOptional
    Optional. Object to use as this when executing callback.
Return value
    An index in the array if an element passes the test; otherwise, -1.
 */

 //Find the index of a prime number in an array
 function isPrime(element, index, array) {
    var start = 2;
    while (start <= Math.sqrt(element)) {
      if (element % start++ < 1) {
        return false;
      }
    }
    return element > 1;
  }
  
  console.log([4, 6, 8, 12].findIndex(isPrime)); // -1, not found
  console.log([4, 6, 7, 12].findIndex(isPrime)); // 2
  