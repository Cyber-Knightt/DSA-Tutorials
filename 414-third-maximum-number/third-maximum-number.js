/**
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function (nums) {
    let uniqueNums = [...new Set(nums)];

    // Sort descending
    uniqueNums.sort((a, b) => b - a);

    // If less than 3 distinct numbers, return max
    if (uniqueNums.length < 3) {
        return uniqueNums[0];
    }

    return uniqueNums[2];
};