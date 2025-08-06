/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function (s) {
    let length = 0;
    let trims = s.trim()
    for (var i = trims.length - 1; i >= 0; i--) {
        if (trims[i] == " ") {
            break;
        }
        length++;
    }
    return length;
};