/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if (s.length !== t.length) return false;

    let map = new Map();

    // count frequency of chars in s
    for (let char of s) {
        map.set(char, (map.get(char) || 0) + 1);
    }

    // subtract using chars in t
    for (let char of t) {
        if (!map.has(char)) return false;
        map.set(char, map.get(char) - 1);
        if (map.get(char) === 0) {
            map.delete(char);
        }
    }

    return map.size === 0;
};