/**
 * ===== 技術集會 WEEK4 =====
 * 本周題目 [EASY]
 * 連結：https://leetcode.com/explore/interview/card/top-interview-questions-easy/92/array/567/
 */

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
 var moveZeroes = function(nums) {
    let first = 0;

    for (let i = 0; i < nums.length; i += 1) {
        const el = nums[i];
        if (el !== 0) {
            if (first === i) {
                first++;
            } else {
                nums[first++] = nums[i];
                nums[i] = 0;
            }
        }
    }
};