/**
 * ===== 技術集會 WEEK6 =====
 * 本周題目 [EASY]
 * https://leetcode.com/explore/interview/card/top-interview-questions-easy/92/array/549/
 *
 * 本周題目 [MEDIUM]
 * 連結：https://leetcode.com/problems/find-the-winner-of-the-circular-game/
 */

// [EASY]
const singleNumber = (nums) => {
    const countMap = {};

    for (let i = 0; i < nums.length; i += 1) {
        const el = nums[i];

        if (countMap[el] === undefined) countMap[el] = 1;
        else countMap[el] += 1;
    }

    const mapKeys = Object.keys(countMap);

    for (let i = 0; i < mapKeys.length; i += 1) {
        const key = mapKeys[i];

        if (countMap[key] === 1) return key;
    }
}

// [MEDIUM]
const findTheWinner = (n, k) => {
    let playerList = [];
    const gap = k - 1;

    for (let i = 1; i <= n; i += 1) playerList.push(i);

    let idx = 0;

    while (playerList.length > 1) {
        idx = (idx + gap) % playerList.length;
        playerList.splice(idx, 1);
    }

    return playerList[0];
}