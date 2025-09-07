/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function (nums) {
    let maxCount = 0;
    let current = 0;

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === 1) {
            current++;
            maxCount = Math.max(maxCount, current);
        } else {
            current = 0;
        }
    }
    
    return maxCount;
};