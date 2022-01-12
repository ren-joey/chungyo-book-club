/**
 * ===== 技術集會 WEEK6 =====
 * 本周題目 [EASY]
 * https://leetcode.com/explore/interview/card/top-interview-questions-easy/92/array/549/
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
 var singleNumber = function(nums) {
    let res = 0;

    for (let i = 0; i < nums.length; i += 1) {
        res ^= nums[i];
    }

    return res;
};