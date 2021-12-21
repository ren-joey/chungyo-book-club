/**
 * ===== 技術集會 WEEK3 =====
 * 本周題目 [EASY]
 * 連結：https://leetcode.com/explore/interview/card/top-interview-questions-easy/96/sorting-and-searching/587/
 */

 var merge = function(nums1, m, nums2, n) {
    const arr = [];
    let mIdx = m;
    let nIdx = 0;
    let count = 0;

    if (n == 0) return


    for (let i = m; i < nums1.length; i++) {
        nums1[i] = nums1[i - m]
    }

    while (count < m + n) {
        if (~~nums1[mIdx] < 1 || nums2[nIdx] < nums1[mIdx]) {
            console.log(n); // [DEV]
            nums1[count++] = nums2[nIdx++];
        } else {
            console.log(mIdx); // [DEV]
            nums1[count++] = nums1[mIdx++];
        }
    }
};

a = [1,2,3,0,0,0]
b = [2,5,6]
merge(a, 3, b, 3)
console.log(a)