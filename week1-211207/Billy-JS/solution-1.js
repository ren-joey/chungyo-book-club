/**
 * ===== 技術集會 WEEK1 =====
 * 本周題目
 * 主題：Top-Interview-questions-easy
 * 類別：Array
 * 題名：Remove Duplicates from Sorted Array
 * 連結：https://leetcode.com/explore/interview/card/top-interview-questions-easy/92/array/727/
 */

const checkDuplicate = (nums, callback) => {
    for (let i = 0; i < nums.length; i += 1) {
        if (nums[i] === '_') break;
        if (nums[i] === nums[i + 1]) {
            nums.splice(i + 1, 1);
            nums.push('_');

            callback();

            checkDuplicate(nums, callback);
            break;
        }
    }
    return nums;
};

const removeDuplicateFromSortedArr = (nums) => {
    let count = 0;
    checkDuplicate(nums, () => {
        count += 1;
    })
    console.log(nums);
    return count;
};

const result = removeDuplicateFromSortedArr([0,0,1,1,1,2,2,3,3,4]);
console.log(result);