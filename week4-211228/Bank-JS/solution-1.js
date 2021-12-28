/**
 * ===== 技術集會 WEEK3 =====
 * 本周題目 [EASY]
 * 連結：https://leetcode.com/explore/interview/card/top-interview-questions-easy/96/sorting-and-searching/587/
 *
 * 本周題目 [MEDIUM]
 * 連結：https://leetcode.com/problems/minimum-number-of-operations-to-move-all-balls-to-each-box/
 */

var merge = function (nums1, m, nums2, n) {
  nums1.splice(m, nums1.length - m); // 刪除0

  var i = 0;
  var j = 0;
  // 當j小於陣列2數量
  while (j < nums2.length) {
    // 陣列1找不到或陣列一[i]大於陣列二[j]
    if (nums1[i] === undefined || nums1[i] > nums2[j]) {
      nums1.splice(i, 0, nums2[j]);
      console.log(`在第${i}位置加入${nums2[j]}`);
      j++;
      i++;
    } else {
      i++;
      console.log("i++");
    }
  }
  console.log(nums1);
};

var mymy = function (nums1, m, nums2, n) {
  nums1.splice(m, nums1.length - m);
  const aa = nums1.concat(nums2);
  aa.sort();
  console.log("mymy", aa);
};

/**
 * ===== 技術集會 WEEK4 =====
 * 本周題目 [EASY]
 * 連結：https://leetcode.com/explore/interview/card/top-interview-questions-easy/92/array/567/
 *
 * 本周題目 [MEDIUM]
 * 連結：https://leetcode.com/problems/deepest-leaves-sum/
 */
