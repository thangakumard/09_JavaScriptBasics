/**
Syntax
arr.reduce(callback[, initialValue])
Parameters
callback
        Function to execute on each element in the array, taking four arguments:
accumulator
        The accumulator accumulates the callback's return values; it is the accumulated value previously returned in the last invocation of the callback, or initialValue, if supplied (see below).
currentValue
        The current element being processed in the array.
currentIndexOptional
        The index of the current element being processed in the array. Starts at index 0, if an initialValue is provided, and at index 1 otherwise.
arrayOptional
        The array reduce() was called upon.
initialValueOptional
        Value to use as the first argument to the first call of the callback. If no initial value is supplied, the first element in the array will be used. Calling reduce() on an empty array without an initial value is an error.
Return value
        The value that results from the reduction. 

 */

var maxCallback = ( acc, cur ) => Math.max( acc.x, cur.x );
var maxCallback2 = ( max, cur ) => Math.max( max, cur );

// reduce() without initialValue
[ { x: 22 }, { x: 42 } ].reduce( maxCallback ); // 42
[ { x: 22 }            ].reduce( maxCallback ); // { x: 22 }
[                      ].reduce( maxCallback,{}); // TypeError

// map/reduce; better solution, also works for empty or larger arrays
[ { x: 22 }, { x: 42 } ].map( el => el.x )
                        .reduce( maxCallback2, -Infinity );

//Sum all the values of an array
var sum = [0, 1, 2, 3].reduce(function (accumulator, currentValue) {
    return accumulator + currentValue;
    }, 0);
    // sum is 6

//Sum of values in an object array
var initialValue = 0;
var sum = [{x: 1}, {x:2}, {x:3}].reduce(function (accumulator, currentValue) {
    return accumulator + currentValue.x;
},initialValue)

console.log(sum) // logs 6

//Flatten an array of arrays
var flattened = [[0, 1], [2, 3], [4, 5]].reduce(
    ( accumulator, currentValue ) => accumulator.concat(currentValue),
    []
  );
console.log(flattened);

//Counting instances of values in an object
var names = ['Alice', 'Bob', 'Tiff', 'Bruce', 'Alice'];
var countNames = names.reduce((allNames, name) => {
    if(name in allNames){
        allNames[name]++;
    }
    else{
        allNames[name] = 1;
    }
    return allNames;
} , {}) 
console.log(countNames);

//Remove duplicate items
const removeDuplicate = (arr) =>{        
    let result = arr.sort().reduce((accumulator,current)=> {
        const length = accumulator.length;
        if(length == 0 || accumulator[length-1] !== current){
            accumulator.push(current);
        }
        return accumulator;
    },[]);
    return result;
}
let input = [1, 2, 1, 2, 3, 5, 4, 5, 3, 4, 4, 4, 4];
let result = removeDuplicate(input);
console.log(input);
console.log(result);
//Grouping objects by a property
var people = [
    { name: 'Alice', age: 21 },
    { name: 'Max', age: 20 },
    { name: 'Jane', age: 20 }
  ];
  
  function groupBy(objectArray, property) {
    return objectArray.reduce(function (acc, obj) {
      var key = obj[property];
      if (!acc[key]) {
        acc[key] = [];
      }
      acc[key].push(obj);
      return acc;
    }, {});
  }
  
  var groupedPeople = groupBy(people, 'age');
  // groupedPeople is:
  // { 
  //   20: [
  //     { name: 'Max', age: 20 }, 
  //     { name: 'Jane', age: 20 }
  //   ], 
  //   21: [{ name: 'Alice', age: 21 }] 
  // }