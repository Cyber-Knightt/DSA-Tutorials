/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function (s) {
    let freq = new Map();
    // Count frequency of each character
    for (let char of s) {
        freq.set(char, (freq.get(char) || 0) + 1);
    }
    // Find the first unique character
    for (let i = 0; i < s.length; i++) {
        if (freq.get(s[i]) === 1) {
            return i;
        }
    }
    return -1;
};