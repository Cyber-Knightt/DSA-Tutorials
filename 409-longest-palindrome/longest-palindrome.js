/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function(s) {
    let freq = new Map();
    
    // Count frequency of each character
    for (let char of s) {
        freq.set(char, (freq.get(char) || 0) + 1);
    }
    
    let length = 0;
    let hasOdd = false;
    
    for (let count of freq.values()) {
        if (count % 2 === 0) {
            length += count; // even frequencies are fully usable
        } else {
            length += count - 1; // use the even part
            hasOdd = true; // remember there's at least one odd frequency
        }
    }
    
    if (hasOdd) {
        length += 1; // one odd frequency can be in the middle
    }
    
    return length;
};