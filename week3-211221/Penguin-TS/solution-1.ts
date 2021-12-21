/**
 * ===== 技術集會 WEEK3 =====
 * 本周題目 [EASY]
 * 連結：https://leetcode.com/explore/interview/card/top-interview-questions-easy/96/sorting-and-searching/587/
 *
 * 本周題目 [MEDIUM]
 * 連結：https://leetcode.com/problems/minimum-number-of-operations-to-move-all-balls-to-each-box/
 */

//easy
// merge sorted array
/**
 Do not return anything, modify nums1 in-place instead.
 */

// sol1
// function merge(nums1: number[], m: number, nums2: number[], n: number): void {
//     let _nums1 = [...nums1];
//     let nums1Idx = 0;
//     let nums2Idx = 0;

//     for (let i = 0; i < nums1.length; i++) {
//         const currentNum1 = _nums1[nums1Idx];
//         const currentNum2 = nums2[nums2Idx];
//         // console.log(nums1, currentNum1, currentNum2, nums1Idx, nums2Idx)

//         if(nums1Idx === (m)) {
//             nums1[i] = currentNum2;
//             nums2Idx++;
//         }
//         else if(nums2Idx === (n)) {
//             nums1[i] = currentNum1;
//             nums1Idx++;
//         }
//         else {
//             if(currentNum1 < currentNum2) {
//                 nums1[i] = currentNum1;
//                 nums1Idx++;
//             } else {
//                 nums1[i] = currentNum2;
//                 nums2Idx++;
//             }
//         }
//     }
//     // console.log(nums1)
// };

// sol2
function merge(nums1: number[], m: number, nums2: number[], n: number): void {
    for (let i = nums1.length - 1; i >= 0; i--) {
        if(n && m) {
            const num1 = nums1[m - 1];
            const num2 = nums2[n - 1];

            if(num1 > num2) {
                nums1[i] = num1;
                m--;
            } else {
                nums1[i] = num2;
                n--;
            }
            // break;
        } else {
            if(n) {
                nums1[i] = nums2[n - 1];
                n--;
            }
            if(m) {
                nums1[i] = nums1[m - 1];
                m--;
            }
        }
        console.log(nums1)
    }
}


merge(
    [1,2,3,0,0,0],
    3,
    [2,5,6],
    3,
)

// medium
// sol1
function minOperations(boxes: string): number[] {
    let res: number[] = [];
    for (let i = 0; i < boxes.length; i++) {
        res[i] = 0;
        for (let j = 0; j < boxes.length; j++) {
            const cursor = boxes[j]
            if(cursor === '1') {
                res[i] += Math.abs(i - j);
            }
        }
    }
    return res;
};