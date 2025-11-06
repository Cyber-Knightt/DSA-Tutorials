/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function (nums) {
    let low = 0;              // position for next 0
    let mid = 0;              // current element
    let high = nums.length - 1; // position for next 2

    while (mid <= high) {
        if (nums[mid] === 0) {
            // swap 0 to the front
            [nums[low], nums[mid]] = [nums[mid], nums[low]];
            low++;
            mid++;
        } else if (nums[mid] === 1) {
            // 1 is in the right place, just move ahead
            mid++;
        } else {
            // nums[mid] === 2 → swap 2 to the end
            [nums[mid], nums[high]] = [nums[high], nums[mid]];
            high--
        }
    }
};