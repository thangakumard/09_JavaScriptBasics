/*
Have the function Stringchall(str) take the str parameter being passed 
and return in proper camel case format 
where the first letter of each word is capitalized (excluding the first leter). 
The string wil only contains letters and come combination of delimiter punctuation char seperating the each word
input: BOB loves-coding
Output shud be bobLovesCoding
input: abcd-e-f%g output: aBCDEFG
input: cats AND*Dogs-are Awesome output: catsAndD AreAwesome
*/

var Stringchall = function (str) {
   //let words = str.split(/\W+/);
   let words = str.split(/[^a-zA-Z]+/)

   const capitalizedWords = words.map((word, index)=>{
        if(index === 0){
            return word.toLowerCase();
        }else{
            return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
        }
   });
   console.log(capitalizedWords.join(''));

   return capitalizedWords.join('');

 }
 Stringchall('BOB loves-coding');
 Stringchall('abcd-e-f%g');
 Stringchall('cats AND*Dogs-are Awesome');