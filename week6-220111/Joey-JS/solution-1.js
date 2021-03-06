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
    const map = [];
    const _map = [];

    for (let i = 0; i < nums.length; i += 1) {
        if (nums[i] >= 0) {
            map[nums[i]] = ~~map[nums[i]] + 1;
        } else {
            const idx = -nums[i];
            _map[idx] = ~~_map[idx] + 1;
        }
    }

    return map.indexOf(1) !== -1 ? map.indexOf(1) : 0 - _map.indexOf(1);
};