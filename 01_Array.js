 var A = [1,2,3,4,5];
 console.log(A);
 A.push(6);
 console.log(A);
 B = A.splice(0,A.length);
 console.log(A);
 console.log(B);
 B.length = 0;
 console.log(B);
 console.log(Math.max(1,2,3));  // Will return 3

 //Since JavaScript arrays do not have a max() method, you can apply the Math.max() method instead.
 console.log(Math.max.apply(null, [1,2,3])); // Will also return 3