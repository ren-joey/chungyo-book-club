/**
 * ===== 技術集會 WEEK1 =====
 * 本周題目
 * 主題：Top-Interview-questions-easy
 * 類別：Array
 * 題名：Remove Duplicates from Sorted Array
 * 連結：https://leetcode.com/explore/interview/card/top-interview-questions-easy/92/array/727/
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
 var removeDuplicates = function(nums) {
    let front = 0;

    for (let i = 0; i < nums.length; i += 1) {
        if (nums[front] !== nums[i]) {
            front += 1;
            nums[front] = nums[i];
        }
    }

    return front + 1;
};

removeDuplicates([1,1,3]);