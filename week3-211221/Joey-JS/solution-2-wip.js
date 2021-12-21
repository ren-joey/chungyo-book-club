/**
 * ===== 技術集會 WEEK3 =====
 * 本周題目 [EASY]
 * 連結：https://leetcode.com/explore/interview/card/top-interview-questions-easy/96/sorting-and-searching/587/
 */

/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
 var merge = function(nums1, m, nums2, n) {
    clone = [...nums1];
    idx1 = 0;
    idx2 = 0;
    count = 0;

    // for (let i = m; i < nums1.length; i++) {
    //     nums1[i] = nums1[i - m]
    // }

    while (count < m + n) {
        if (clone[idx1] == 0) {
            nums1[count++] = nums2[idx2++];
        } else if (clone[idx1] > nums2[idx2]) {
            nums1[count++] = nums2[idx2++];
        } else {
            nums1[count++] = clone[idx1++];
        }
    }
};


a = [1,2,3,0,0,0]
b = [2,5,6]
merge(a, 3, b, 3)
console.log(a)