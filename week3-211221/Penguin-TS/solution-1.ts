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
function merge(nums1: number[], m: number, nums2: number[], n: number): void {
    let _nums1 = [...nums1];
    let nums1Idx = 0;
    let nums2Idx = 0;

    for (let i = 0; i < nums1.length; i++) {
        const currentNum1 = _nums1[nums1Idx];
        const currentNum2 = nums2[nums2Idx];
        console.log(nums1,)

        if(nums1Idx === (m - 1)) {
            nums1[i] = currentNum2;
        }
        else if(nums2Idx === (n - 1)) {
            nums1[i] = currentNum1;
        }
        else {
            if(currentNum1 > currentNum2) {
                nums1[i] = currentNum2;
                nums2Idx++;
            } else {
                nums1[i] = currentNum1;
                nums1Idx++;
            }
        }
    }
};

// not solved

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