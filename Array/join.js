//The join() method joins all elements of an array (or an array-like object) into a string and returns this string.
//Joining an array four different ways
var a = ['Wind', 'Rain', 'Fire'];
a.join();      // 'Wind,Rain,Fire'
a.join(', ');  // 'Wind, Rain, Fire'
a.join(' + '); // 'Wind + Rain + Fire'
a.join('');    // 'WindRainFire'

//Joining an array-like object
//The following example joins array-like object (arguments), by calling Function.prototype.call on Array.prototype.join.
function f(a, b, c) {
    var s = Array.prototype.join.call(arguments);
    console.log(s); // '1,a,true'
  }
  f(1, 'a', true);
  //expected output: "1,a,true"