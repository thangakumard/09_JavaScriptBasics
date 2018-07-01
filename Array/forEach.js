/*
callback is invoked with three arguments:

the element value
the element index
the array being traversed

forEach() executes the callback function once for each array element; unlike map() or reduce() it always returns the value undefined and is not chainable. The typical use case is to execute side effects at the end of a chain.

There is no way to stop or break a forEach() loop other than by throwing an exception. If you need such behavior, the forEach() method is the wrong tool.

Early termination may be accomplished with:

A simple loop
A for...of loop
Array.prototype.every()
Array.prototype.some()
Array.prototype.find()
Array.prototype.findIndex()
The other Array methods: every(), some(), find(), and findIndex() test the array elements with a predicate returning a truthy value to determine if further iteration is required.

*/
/** 1 **/
//Printing the contents of an array
function logArrayElements(element, index, array){
    console.log(`a[${index}] = ${element}`);
}
[2, 5, , 9].forEach(logArrayElements); //Index 2 is skipped


/** 2 **/
//using thisArg
function Counter(){
    this.sum = 0;
    this.count = 0;
}

Counter.prototype.add= function(array){
    array.forEach(function(entry){
        thi.sum += entry;
        this.count++;
        }, this //********NOTE THIS argument is passed here
    );
}
//If passing the function argument using an arrow function expression the thisArg parameter can be omitted as arrow functions lexically bind the this value.

/** 3 **/
//An object copy function
function copy(obj) {
    const copy = Object.create(Object.getPrototypeOf(obj));
    const propNames = Object.getOwnPropertyNames(obj);
  
    propNames.forEach(function(name) {
      const desc = Object.getOwnPropertyDescriptor(obj, name);
      console.log(name);
      console.log(desc);
      Object.defineProperty(copy, name, desc);
    });
  
    return copy;
  }
  
  const obj1 = { a: 1, b: 2 };
  const obj2 = copy(obj1); // obj2 looks like obj1 now
  console.log(obj2);

  /** 4 **/
//If the array is modified during iteration, other elements might be skipped.
var sample1 = function(){
    var words = ['one', 'two', 'three', 'four'];
    words.forEach(function(word) {
      console.log(word);
      if (word === 'two') {
        words.shift();
      }
    });
    }
    sample1();    