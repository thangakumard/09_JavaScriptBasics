 var arrayFunction = function(){
    var A = [1,2,3,4,5];
    console.log(A);
    
    A.push(6); // Append new elements to the array and returns the new length of the array
    console.log(`push number '6' : ${A}`);

    A.unshift(-1,0); //Inserts new elements at the start of the array
    console.log(`unshift numbers '-1,0' : ${A}`);

    A.unshift(-2);//Inserts new elements at the start of the array
    console.log(`unshift numbers '-2' : ${A}`);

    console.log(`A.shift() : ${A.shift()}`); //removes the first element in the array and retuns that

    console.log(A);
    console.log(`Index of 3 : ${A.indexOf(3)}`);

    console.log(`Remove 3 from array :${A.splice(A.indexOf(3),1)}`);
    console.log(A);

    console.log(`Replace 4 with -4  :${A.splice(A.indexOf(4),1,-4)}`);
    console.log(A);

    console.log(`Removed 3 items from array  :${A.splice(0,3)}`);
    console.log(A);

    console.log(`Get all the elements from the 2nd index : ${A.slice(2)}`);
    console.log(`Get all the elements in 1st and 2nd index : ${A.slice(1,3)}`);

    A.push('Ram');
    A.length = 10;
    console.log(`Object.keys(A) : ${Object.keys(A)}`);

    A[7] = 7;
    console.log(A);

    console.log(`Reverse Arry : ${A.reverse()}`);

    console.log(`Sort Arry : ${A.sort()}`);
    console.log(A);
    delete A[1];
    console.log(A);

    B = A.splice(0,A.length);
    console.log(A);
    console.log(B);
    B.length = 0;
    console.log(B);
    console.log(Math.max(1,2,3));  // Will return 3 


    //Since JavaScript arrays do not have a max() method, you can apply the Math.max() method instead.
    console.log(Math.max.apply(null, [1,2,3])); // Will also return 3
 }
 arrayFunction();
