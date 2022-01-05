/**
 * ===== 技術集會 WEEK4 =====
 * 本周題目 [EASY]
 * 連結：https://leetcode.com/explore/interview/card/top-interview-questions-easy/92/array/559/
 */

/**
 * @param {number[]} digits
 * @return {number[]}
 */
 var plusOne = function(digits) {
    pointer = digits.length - 1;

    while(pointer >= 0) {
        if (digits[pointer] === 9) {
            digits[pointer--] = 0;
        } else {
            digits[pointer] += 1;
            break;
        }
    }

    // for (let i = digits.length - 1; i >= 0; i -= 1) {
    //     let element = digits[i];
    //     if (++element === 10) {
    //         digits[i] = 0;
    //     } else {
    //         digits[i] += 1;
    //         break;
    //     }
    // }

    if (digits[0] === 0) digits.splice(0, 0, 1);
    return digits;
};