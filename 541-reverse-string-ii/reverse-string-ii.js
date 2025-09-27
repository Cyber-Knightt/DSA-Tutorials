/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var reverseStr = function (s, k) {
    let arr = s.split("");

    for (let i = 0; i < arr.length; i += 2 * k) {
        // Reverse from i to i + k - 1
        let left = i, right = Math.min(i + k - 1, arr.length - 1);
        while (left < right) {
            [arr[left], arr[right]] = [arr[right], arr[left]]; // swap
            left++;
            right--;
        }
    }
    
    return arr.join("");
};