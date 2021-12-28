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
    let max = 1;
    let res = 0;

    const traversal = (node, level) => {
        if (!node) return;
        if (node.left !== undefined) traversal(node.left, level + 1);
        if (node.right !== undefined) traversal(node.right, level + 1);
        if (level === max) res += ~~node.val;
        else if (level > max) {
            max = level;
            res = ~~node.val;
        }
    };


    traversal(root, 1);

    return res;
};
