function myFunction() {
    var a = 4;
    console.log(a * a);
}

myFunction();

/*******
 * Variable Lifetime
Global variables live as long as your application (your window / your web page) lives.

Local variables have short lives. They are created when the function is invoked, and deleted when the function is finished.
 */

 // Initiate counter
var counter = 0;
var sum = 0;

// Function to increment counter
function add() {
    counter += 1;

    var sum;
    sum += 1;    

    var point=0;
    point += 1;
    return point;
}

// Call add() 3 times
add();
add();
add();
console.log(counter);
console.log(sum);
console.log(add());


var addBy1 = (function () {
    var counter = 0;
    return function () {counter += 1; return counter}
})();

addBy1();
addBy1();
console.log(addBy1());