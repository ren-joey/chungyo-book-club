/**
 * ===== 技術集會 WEEK3 =====
 * 本周題目 [EASY]
 * 連結：https://leetcode.com/explore/interview/card/top-interview-questions-easy/96/sorting-and-searching/587/
 *
 * 本周題目 [MEDIUM]
 * 連結：https://leetcode.com/problems/minimum-number-of-operations-to-move-all-balls-to-each-box/
 */


// [EASY]
const merge = (nums1, m, nums2, n) => {
    // clear 0
    for (let i = nums1.length - 1; i >= 0; i -= 1) {
        if (i + 1 > m) nums1.splice(i, 1);
    }
    for (let i = nums2.length - 1; i >= 0; i -= 1) {
        if (i + 1 > n) nums2.splice(i, 1);
    }

    // concat
    for (let i = 0; i < nums2.length; i += 1) {
        nums1.push(nums2[i]);
    }

    nums1.sort((a, b) => a - b);
}


// [MEDIUM]
const minOperations = (boxes) => {
    const arr = boxes.split('');
    const arr2 = [];

    // 計算步數
    for (let i = 0; i < arr.length; i += 1) {
        arr2[i] = 0;
        for (let j = 0; j < arr.length; j += 1) {
            if (i !== j && +arr[j] !== 0) {
                const steps = j - i;
                arr2[i] += steps < 0 ? steps * -1 : steps;
            }
        }
    }

    return arr2;
};