/**
 * ===== 技術集會 WEEK1 =====
 * 本周題目
 * 主題：Top-Interview-questions-easy
 * 類別：Array
 * 題名：Remove Duplicates from Sorted Array
 * 連結：https://leetcode.com/explore/interview/card/top-interview-questions-easy/92/array/727/
 */

// Array is sorted!

// sol.1

function removeDuplicates(nums: number[]): number {
    let currentNum = nums[0];
    let currentIdx = 0;
    for (let i = 0; i < nums.length; i++) {
        if(currentNum === nums[nums.length - 1]) break;
        const num = nums[i];
        if(currentNum !== num) {
            currentNum = num;
            currentIdx++;
            nums[currentIdx] = currentNum;
        }
    }
    // console.log(currentIdx);
    nums.splice(currentIdx + 1)
    return nums.length;
}

// sol.2
// 用Set直接作弊

let _nums = [1, 1, 2, 2, 3, 4, 4]
removeDuplicates(_nums)
console.log(_nums)

