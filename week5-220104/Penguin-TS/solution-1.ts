/**
 * ===== 技術集會 WEEK4 =====
 * 本周題目 [EASY]
 * 連結：https://leetcode.com/explore/interview/card/top-interview-questions-easy/92/array/559/
 *
 * 本周題目 [MEDIUM]
 * 連結：https://leetcode.com/problems/partition-labels/
 */

function plusOne(digits: number[]): number[] {
  const lastIdx = digits.length - 1;

  for (let i = lastIdx; i >= 0; i--) {
    if(digits[i] < 9) {
      digits[i] += 1;
      return digits;
    }
    digits[i] = 0;
  }
  
  digits = [1, ...digits];

  return digits;
}

// function plusOne(digits: number[]): number[] {
//   return (Number(digits.join('')) + 1).toString().split('').map(s => Number(s))
// }

// console.log(
//   plusOne([9, 9, 9])
// )

// function partitionLabels(s: string): number[] {
//   let charFirstLastIdx: Record<string, number[]> = {};

//   for (let i = 0; i < s.length; i++) {
//     const char = s.charAt(i);
//     if(!charFirstLastIdx[char]) {
//       charFirstLastIdx[char] = [i];
//     } else {
//       charFirstLastIdx[char][1] = i;
//     }
//   }

//   // console.log(charFirstLastIdx)

//   // let found = {};
//   let res: number[] = [];
//   let startIdx = 0;
//   let lastIdx = 0;

//   for (let j = 0; j < s.length; j++) {
//     const char = s[j];
//     lastIdx = Math.max(charFirstLastIdx[char][1] || charFirstLastIdx[char][0], lastIdx);
//     if(lastIdx === j) {
//       res.push(lastIdx - startIdx + 1);
//       startIdx = lastIdx + 1;
//     }
//   }

//   return res;
// };

function partitionLabels(s: string): number[] {
  let charLastIdx: Record<string, number> = {};

  for (let i = s.length - 1; i >= 0; i--) {
    const char = s.charAt(i);
    if(!charLastIdx[char]) {
      charLastIdx[char] = i;
    }
  }

  let res: number[] = [];
  let startIdx = 0;
  let lastIdx = 0;

  for (let j = 0; j < s.length; j++) {
    const char = s[j];
    lastIdx = Math.max(charLastIdx[char], lastIdx);
    if(lastIdx === j) {
      res.push(lastIdx - startIdx + 1);
      startIdx = lastIdx + 1;
    }
  }

  return res;
};

console.log(
  partitionLabels("ababcbacadefegdehijhklij")
)