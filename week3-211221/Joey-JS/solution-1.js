/**
 * ===== 技術集會 WEEK3 =====
 * 本周題目 [MEDIUM]
 * 連結：https://leetcode.com/problems/minimum-number-of-operations-to-move-all-balls-to-each-box/
 */

/**
 * @param {string} boxes
 * @return {number[]}
 */
var minOperations = function (boxes) {
    const result = Array(boxes.length).fill(0);
    let notEmpty = 0;
    let runningSum = 0;

    for (let i = 0; i < boxes.length; ++i) {
        result[i] += runningSum;
        if (boxes[i] === "1") ++notEmpty;
        runningSum += notEmpty;
    }

    notEmpty = 0;
    runningSum = 0;

    for (let i = boxes.length - 1; i >= 0; --i) {
        result[i] += runningSum;
        if (boxes[i] === "1") ++notEmpty;
        runningSum += notEmpty;
    }

    return result;
};

console.log(minOperations('1101'));