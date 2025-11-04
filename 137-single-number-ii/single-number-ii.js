/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
    let ones = 0;  // bits seen 1 time mod 3
    let twos = 0;  // bits seen 2 times mod 3

    for (const x of nums) {
        ones = (ones ^ x) & ~twos;
        twos = (twos ^ x) & ~ones;
    }return ones; 
};