/**
 * @param {string} s
 * @return {number}
 */
var countSegments = function(s) {
    return s.trim().length === 0 ? 0 : s.trim().split(/\s+/).length;
};