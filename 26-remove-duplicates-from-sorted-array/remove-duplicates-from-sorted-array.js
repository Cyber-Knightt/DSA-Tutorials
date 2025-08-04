/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let i = 0; // Pointer for the place to insert next unique number
    for (let j = 1; j < nums.length; j++) {
        if (nums[j] !== nums[i]) {
            i++; // move forward to next position
            nums[i] = nums[j]; // update position with new unique value
        }
    }
    return i + 1;
};