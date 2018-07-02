/*****
 * Syntax
    array.splice(start[, deleteCount[, item1[, item2[, ...]]]])
Parameters
start
    Index at which to start changing the array (with origin 0). If greater than the length of the array, actual starting index will be set to the length of the array. If negative, will begin that many elements from the end of the array (with origin -1) and will be set to 0 if absolute value is greater than the length of the array.
deleteCount Optional
    An integer indicating the number of old array elements to remove.
    If deleteCount is omitted, or if its value is larger than array.length - start (that is, if it is greater than the number of elements left in the array, starting at start), then all of the elements from start through the end of the array will be deleted.
    If deleteCount is 0 or negative, no elements are removed. In this case, you should specify at least one new element (see below).
item1, item2, ... Optional
    The elements to add to the array, beginning at the start index. If you don't specify any elements, splice() will only remove elements from the array.
Return value
    An array containing the deleted elements. If only one element is removed, an array of one element is returned. If no elements are removed, an empty array is returned.
 */
//The splice() method changes the contents of an array by removing existing elements and/or adding new elements.
//Remove 0 elements from index 2, and insert "drum"

var myFish = ['angel', 'clown', 'mandarin', 'sturgeon'];
var removed = myFish.splice(2, 0, 'drum');
console.log(myFish);

//Remove 1 element from index 3
myFish = ['angel', 'clown', 'drum', 'mandarin', 'sturgeon'];
removed = myFish.splice(3, 1);
console.log(myFish);

//Remove 1 element from index 2, and insert "trumpet"
myFish = ['angel', 'clown', 'drum', 'sturgeon'];
removed = myFish.splice(2, 1, 'trumpet');
console.log(myFish);

//Remove 2 elements from index 0, and insert "parrot", "anemone" and "blue"
myFish = ['angel', 'clown', 'trumpet', 'sturgeon'];
removed = myFish.splice(0, 2, 'parrot', 'anemone', 'blue');
console.log(myFish);

//Remove 2 elements from index 2
myFish = ['parrot', 'anemone', 'blue', 'trumpet', 'sturgeon'];
removed = myFish.splice(myFish.length - 3, 2);
console.log(myFish);

//Remove 1 element from index -2
myFish = ['angel', 'clown', 'mandarin', 'sturgeon'];
removed = myFish.splice(-2, 1);
console.log(myFish);

//Remove all elements after index 2 (incl.)
myFish = ['angel', 'clown', 'mandarin', 'sturgeon'];
removed = myFish.splice(2);
console.log(myFish);
