/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
var findContentChildren = function (g, s) {
    g.sort((a, b) => a - b); // sort greed factors
    s.sort((a, b) => a - b); // sort cookie sizes

    let i = 0; // pointer for children
    let j = 0; // pointer for cookies
    let count = 0;

    while (i < g.length && j < s.length) {
        if (s[j] >= g[i]) {
            // cookie satisfies the child
            count++;
            i++;
            j++;
        } else {
            // cookie too small, try next cookie
            j++;
        }
    }

    return count;
};