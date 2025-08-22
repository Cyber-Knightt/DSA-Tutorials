/**
 * @param {number[]} nums
 * @return {string[]}
 */
var summaryRanges = function (nums) {
    let result = [];
    let start = nums[0];

    for (var i = 1; i <= nums.length; i++) {
        if (i === nums.length || nums[i] !== nums[i - 1] + 1) {
            if (start === nums[i - 1]) {
                result.push(`${start}`);
            } else {
                result.push(`${start}->${nums[i - 1]}`);
            }
            if (i < nums.length) start = nums[i];
        }
    }
    return result;
};