/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function (pattern, s) {
    let words = s.split(" ");
    if (pattern.length !== words.length) return false;

    let mapPattern = new Map(); // pattern -> word
    let mapWord = new Map();    // word -> pattern

    for (let i = 0; i < pattern.length; i++) {
        let p = pattern[i];
        let w = words[i];

        if (!mapPattern.has(p) && !mapWord.has(w)) {
            mapPattern.set(p, w);
            mapWord.set(w, p);
        } else {
            if (mapPattern.get(p) !== w || mapWord.get(w) !== p) {
                return false;
            }
        }
    }
    return true;
};