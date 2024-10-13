var isAnagram = function(s, t) {
    if(s.length != t.length)
        return false;

    let counter = new Array(26).fill(0);

    for(let i=0; i < s.length;i++){
        counter[s.charCodeAt(i) - 'a'.charCodeAt(0)]++;
    }

    for(let i=0; i < t.length;i++){
        counter[t.charCodeAt(i) - 'a'.charCodeAt(0)]--;
    }

    // Check if all counts are zero
    for (let i = 0; i < 26; i++) {
        if (counter[i] !== 0) return false;
    }
    return true;
    
};