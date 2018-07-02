//The flat() method creates a new array with all sub-array elements concatted into it recursively up to the specified depth.

//Flattening nested arrays
var arr1 = [1, 2, [3, 4]];
arr1.flat(); 
// [1, 2, 3, 4]

var arr2 = [1, 2, [3, 4, [5, 6]]];
arr2.flat();
// [1, 2, 3, 4, [5, 6]]

var arr3 = [1, 2, [3, 4, [5, 6]]];
arr3.flat(2);
// [1, 2, 3, 4, 5, 6]

//The flat method removes empty slots in arrays:

var arr4 = [1, 2, , 4, 5];
arr4.flat();
// [1, 2, 4, 5]
