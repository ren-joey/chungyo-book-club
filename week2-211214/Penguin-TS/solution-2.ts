/**
 * ===== 技術集會 WEEK2 =====
 * 本周題目
 * 主題：Top-Interview-questions-easy
 * 類別：String
 * 題名：First Unique Character in a String
 * 連結：https://leetcode.com/explore/interview/card/top-interview-questions-easy/127/strings/881/
 */

function firstUniqChar(s: string) {
    let found = {};

    for (let i = 0; i < s.length; i++) {
        const char = s[i];
        found[char] = found[char] ? found[char] + 1 : 1;
    }
    for (let i = 0; i < s.length; i++) {
        const char = s[i];
        if(found[char] === 1) return i;
    }
    return -1;
};