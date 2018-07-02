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