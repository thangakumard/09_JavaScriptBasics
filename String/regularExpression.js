
removeEmptySpaces = (str) => {
    const result = str.replace(/\s/g,"");
    console.log(result);
    //without regrex
    const word2 = ("I am good!").replaceAll(" ", "");
    console.log(word2);

    return result;
};

removeAlltheSpecialCharacrers = (str) =>{
    //const result = str.replace(/[^a-zA-Z0-9 ]/g,"");
    const result = str.replace(/[^a-zA-Z0-9 ]/g,"");
    console.log(result);
}

removeAlltheNonNumbers = (str) =>{
    //const result = str.replace(/[^a-zA-Z0-9 ]/g,"");
    const result = str.replace(/[^0-9]/g,"");
    console.log(result);
}

removeAlltheNonAplphabets = (str) =>{
    //const result = str.replace(/[^a-zA-Z0-9 ]/g,"");
    const result = str.replace(/[^a-zA-Z]/g,"");
    console.log(result);
}


removeEmptySpaces("i will win");
removeAlltheSpecialCharacrers("Apple, Orange#@");
removeAlltheNonNumbers("Apple231432@!$#!@$");
removeAlltheNonAplphabets("Apple231432@!$#!@$");
