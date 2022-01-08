/**
 * ===== 技術集會 WEEK4 =====
 * 本周題目 [EASY]
 * 連結：https://leetcode.com/explore/interview/card/top-interview-questions-easy/92/array/559/
 *
 * 本周題目 [MEDIUM]
 * 連結：https://leetcode.com/problems/partition-labels/
 */

// [EASY]
const plusOne = (arr) => {
    let isNextPlusOne = false;
    arr[arr.length - 1] += 1;

    for (let i = arr.length - 1; i >= 0; i -= 1) {
        if (isNextPlusOne) {
            arr[i] += 1;
            isNextPlusOne = false;
        }

        if (arr[i].toString().length > 1) {
            isNextPlusOne = true;
            arr[i] = arr[i] % 10;
        }

        if (i === 0 && isNextPlusOne) {
            arr.unshift(1);
            break;
        }
    }

    return arr;
};

// [MEDIUM]
const partitionLabels = (str) => {
    let lastIdx = {};

    for (let i = 0; i < str.length; i += 1) lastIdx[str[i]] = i;

    let res = [];
    let start = 0;
    let end = 0;

    for (let i = 0; i < str.length; i += 1) {
        end = Math.max(end, lastIdx[str[i]]);

        if (i === end) {
            res.push(end - start + 1);
            start = end + 1;
        }
    }

    return res;
};