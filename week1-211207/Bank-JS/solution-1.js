/**
 * ===== 技術集會 WEEK1 =====
 * 本周題目
 * 主題：Top-Interview-questions-easy
 * 類別：Array
 * 題名：Remove Duplicates from Sorted Array
 * 連結：https://leetcode.com/explore/interview/card/top-interview-questions-easy/92/array/727/
 */

var removeDuplicates = function (nums) {
  let front = 0;

  for (let i = 0; i < nums.length; i += 1) {
    if (nums[front] !== nums[i]) {
      front += 1;
      nums[front] = nums[i];
    }
  }

  console.log(nums);
  return front + 1;
};

console.log(removeDuplicates([1, 1, 3, 3, 3, 5, 8]));
