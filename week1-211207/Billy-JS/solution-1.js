/**
 * ===== 技術集會 WEEK1 =====
 * 本周題目
 * 主題：Top-Interview-questions-easy
 * 類別：Array
 * 題名：Remove Duplicates from Sorted Array
 * 連結：https://leetcode.com/explore/interview/card/top-interview-questions-easy/92/array/727/
 */

let count = 0;

const removeDuplicateFromSortedArr = (intArr) => {
    for (let i = 0; i < intArr.length; i += 1) {
        if (intArr[i] === '_') break;
        if (intArr[i] === intArr[i + 1]) {
            intArr.splice(i + 1, 1);
            intArr.push('_');

            count += 1;

            removeDuplicateFromSortedArr(intArr);
            break;
        }
    }
    return intArr;
};

const result = removeDuplicateFromSortedArr([1, 1, 1, 2, 3, 3, 4, 5, 6, 7, 7, 8, 9, 9]);

console.log(`${count}, nums = [${result}]`);