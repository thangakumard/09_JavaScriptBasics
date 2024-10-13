var lengthOfLongestSubstring = function(s) {
    if(s == null) return;
    const set = new Set();
    var left = 0, right = 0, maxSubstring = 0;

    while(left <= right && right < s.length()){
        if(!set.has(s.charAt(right))){
            set.add(s.charAt(right))
            right++;
        }else{
            set.remove(s.charAt(left));
            left++;
        }
        maxSubstring = Math.max(maxSubstring, right - left);
    }
    return maxSubstring;
};
lengthOfLongestSubstring();

