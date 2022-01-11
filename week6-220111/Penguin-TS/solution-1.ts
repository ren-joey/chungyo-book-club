/**
 * ===== 技術集會 WEEK6 =====
 * 本周題目 [EASY]
 * https://leetcode.com/explore/interview/card/top-interview-questions-easy/92/array/549/
 *
 * 本周題目 [MEDIUM]
 * 連結：https://leetcode.com/problems/find-the-winner-of-the-circular-game/
 */

// easy

// sol1
// function singleNumber(nums: number[]): number {
//   const appearTimes = {
//     oneTime: new Map<number, number>(),
//     // twoTimes: new Map<number, number>(),
//   };
//   for (let i = 0; i < nums.length; i++) {
//     const num = nums[i];
//     if(typeof appearTimes.oneTime.get(num) === 'number') {
//       appearTimes.oneTime.delete(num);
//       // appearTimes.twoTimes.set(num, num);
//     } else {
//       appearTimes.oneTime.set(num, num);
//     }
//   }

//   return [...appearTimes.oneTime][0][0];
// };

// sol2
// function singleNumber(nums: number[]): number {
//   const appearTimes = {
//     oneTime: {} as { [key: number]: number },
//   };
//   for (let i = 0; i < nums.length; i++) {
//     const num = nums[i];
//     if(typeof appearTimes.oneTime[num] === 'number') {
//       delete appearTimes.oneTime[num];
//     } else {
//       appearTimes.oneTime[num] = num;
//     }
//   }

//   return Object.entries(appearTimes.oneTime)[0][1] as number;
// };

// XOR solution
function singleNumber(nums: number[]): number {
  let res = 0;
  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    res = res ^ num;
  }
  return res;
};

console.log(
  // singleNumber([1, 3, 5, 2, 1, 3, 5])
)

// ----

// medium

// 約瑟夫斯問題: https://zh.wikipedia.org/wiki/%E7%BA%A6%E7%91%9F%E5%A4%AB%E6%96%AF%E9%97%AE%E9%A2%98

// sol1 自己想ㄉ
// function findTheWinner(n: number, k: number): number {
//   let people = Array(n).fill(0).map((_, i) => i + 1);
//   let losers = [];
//   let currentIdx = 0;

//   while(losers.length < n - 1) {
//     currentIdx = (currentIdx + k - 1) % people.length;
//     // console.log(currentIdx)
//     const loser = people[currentIdx];
//     losers.push(loser);
//     people.splice(currentIdx, 1);
//     // console.log(people);
//   }

//   return people[0];
// };

// sol.2 數學解法，可以參考上面的維基百科
// 跟sol1的做法剛好相反
// 找下一位倖存者，一開始就是編號為0的，且每一輪要跳過的人跟輪數一樣
function findTheWinner(n: number, k: number): number {
  let res = 0;
  for (let i = 1; i <= n; i++) {
    res = (res + k) % i;
  }

  return res + 1; //因為編號從1開始，所以res要+1
};

console.log(
  findTheWinner(5, 2),
  // findTheWinner(6, 5),
)