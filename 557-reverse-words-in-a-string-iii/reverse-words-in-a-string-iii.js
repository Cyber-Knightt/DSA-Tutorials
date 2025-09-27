/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    return s.split(" ")                // split into words
        .map(word => word.split("").reverse().join("")) // reverse each word
        .join(" ");   
};