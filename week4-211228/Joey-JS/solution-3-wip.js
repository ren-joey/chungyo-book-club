/**
 * ===== 技術集會 WEEK4 =====
 * 本周題目 [MEDIUM]
 * 連結：https://leetcode.com/problems/deepest-leaves-sum/
 */

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
 var deepestLeavesSum = function(root) {
    root = [root]
    const len = root.length;
    let lv = 1;

    while (2**lv - 1 < len) {
        lv++;
    }

    const start = 2**(--lv) - 1;
    let sum = 0;
    for (let i = start; i < len; i += 1) {
        sum += ~~root[i];
    }

    return sum;
};