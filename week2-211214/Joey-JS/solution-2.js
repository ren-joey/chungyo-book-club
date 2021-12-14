/**
 * ===== 技術集會 WEEK2 =====
 * 本周題目
 * 主題：Top-Interview-questions-easy
 * 類別：String
 * 題名：First Unique Character in a String
 * 連結：https://leetcode.com/explore/interview/card/top-interview-questions-easy/127/strings/881/
 */

/**
 * @param {string} s
 * @return {number}
 */

 var firstUniqChar = function(s) {
    const map = {};

    for (let i = 0; i < s.length; i += 1) {
        const char = s[i];
        map[char] = ~~map[char] + 1;
    }

    for (let i = 0; i < s.length; i += 1) {
        if (map[s[i]] === 1) return i;
    }

    return -1;
};
