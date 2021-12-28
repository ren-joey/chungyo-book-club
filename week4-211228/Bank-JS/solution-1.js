/**
 * ===== 技術集會 WEEK3 =====
 * 本周題目 [EASY]
 * 連結：https://leetcode.com/explore/interview/card/top-interview-questions-easy/96/sorting-and-searching/587/
 *
 * 本周題目 [MEDIUM]
 * 連結：https://leetcode.com/problems/minimum-number-of-operations-to-move-all-balls-to-each-box/
 */

var merge = function (nums1, m, nums2, n) {
  nums1.splice(m, nums1.length - m);

  var i = 0;
  var j = 0;

  while (j < nums2.length) {
    if (nums1[i] === undefined || nums1[i] > nums2[j]) {
      nums1.splice(i, 0, nums2[j]);
      j++;
      i++;
    } else {
      i++;
    }
  }
};
