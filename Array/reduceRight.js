//The reduceRight() method applies a function against an accumulator and each value of the array (from right-to-left) to reduce it to a single value.

const array1 = [[0, 1], [2, 3], [4, 5]].reduceRight(
    (previousValue, currentValue) => previousValue.concat(currentValue)
  );
  
  console.log(array1);
  // expected output: Array [4, 5, 2, 3, 0, 1]
//  ​​​​​​Difference between reduce and reduceRight
var a = ['1', '2', '3', '4', '5']; 
var left  = a.reduce(function(prev, cur)      { return prev + cur; }); 
var right = a.reduceRight(function(prev, cur) { return prev + cur; }); 

console.log(left);  // "12345"
console.log(right); // "54321"