/**
 * ===== 技術集會 WEEK4 =====
 * 本周題目 [EASY]
 * 連結：https://leetcode.com/explore/interview/card/top-interview-questions-easy/92/array/567/
 *
 * 本周題目 [MEDIUM]
 * 連結：https://leetcode.com/problems/deepest-leaves-sum/
 */

// function moveZeroes(nums: number[]): void {
//     if(nums.length === 1 && nums[0] === 0) return;
//     let nonZeroNums = [];
//     for (let i = 0; i < nums.length; i++) {
//         const num = nums[i];
//         num !== 0 && nonZeroNums.push(num);
//     }
//     nums = nonZeroNums.concat(Array(nums.length - nonZeroNums.length).fill(0))
//     console.log(nums)
// };


function moveZeroes(nums: number[]): void {
    if(nums.length === 1 && nums[0] === 0) return;
    let j = 0;
    for (let i = 0; i < nums.length; i++) {
        const num = nums[i];
        if(num !== 0) {
            nums[i] = 0
            nums[j] = num;
            j++;
        }
    }
};

moveZeroes(
    [0,1,0,3,12]
)

//---
 class TreeNode {
     val: number
     left: TreeNode | null
     right: TreeNode | null
     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
         this.val = (val===undefined ? 0 : val)
         this.left = (left===undefined ? null : left)
         this.right = (right===undefined ? null : right)
     }
 }

 // 參考 https://leetcode.com/problems/deepest-leaves-sum/discuss/565187/Java-Recursive-faster-than-100.00


function deepestLeavesSum(root: TreeNode | null): number {
    let sum = 0;
    let maxLevel = 1;
    
    function recursiveSum(node: TreeNode, level: number) {
        if(!node) return;
        if(level > maxLevel) {
            sum = 0;
            maxLevel = level;
        }
        if(level === maxLevel) {
            sum += node.val;
        };
        if(node.left) recursiveSum(node.left, level + 1);
        if(node.right) recursiveSum(node.right, level + 1);
    }

    recursiveSum(root, 0);

    return sum;
};