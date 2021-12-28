/**
 * ===== 技術集會 WEEK4 =====
 * 本周題目 [EASY]
 * 連結：https://leetcode.com/explore/interview/card/top-interview-questions-easy/92/array/567/
 *
 * 本周題目 [MEDIUM]
 * 連結：https://leetcode.com/problems/deepest-leaves-sum/
 */

// [EASY]
const moveZeroes = (nums) => {
    const arr = [];

    // 找出錯誤
    for (let i = 0; i < nums.length; i += 1) {
        if (nums[i] === 0) arr.push(i);
    }

    // 刪除錯誤 + 補零
    for (let i = arr.length - 1; i >= 0; i -= 1) {
        nums.splice(arr[i], 1);
        nums.push(0);
    }
};

const deepestLeavesSum = (root) => {
    // 剩餘解析 treeNode
    const arr = Array.from(root);
    const length = arr.length;
    let sum = 1;
    let branch = 1;
    let branchRemoveLength = 0;

    while (sum < length) {
        branch = branch * 2;
        sum += branch;
        if (sum < length) branchRemoveLength = sum;
    }

    let total = 0;

    for (let i = 0; i < length; i += 1) {
        if (i > branchRemoveLength - 1) total += arr[i];
    }

    return total;
};