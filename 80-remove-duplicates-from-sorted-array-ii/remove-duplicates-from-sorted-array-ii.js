/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
    if (nums.length <= 2) return nums.length;
    
    let i = 2; // start from index 2 since first two can always stay
    for (let j = 2; j < nums.length; j++) {
        // compare current element with the element 2 positions before
        if (nums[j] !== nums[i - 2]) {
            nums[i] = nums[j];
            i++;
        }
    }return i;
};