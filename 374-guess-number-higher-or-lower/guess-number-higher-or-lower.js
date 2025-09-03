/** 
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return 	     -1 if num is higher than the picked number
 *			      1 if num is lower than the picked number
 *               otherwise return 0
 * var guess = function(num) {}
 */

/**
 * @param {number} n
 * @return {number}
 */
var guessNumber = function (n) {
    let low = 1, high = n;

    while (low <= high) {
        let mid = Math.floor((low + high) / 2);
        let res = guess(mid);

        if (res === 0) {
            return mid; // found the number
        } else if (res === -1) {
            high = mid - 1; // actual number is smaller
        } else {
            low = mid + 1;  // actual number is bigger
        }
    }
    return -1;
};