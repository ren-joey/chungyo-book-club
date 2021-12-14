/**
 * ===== 技術集會 WEEK2 =====
 * 本周題目
 * 主題：Top-Interview-questions-easy
 * 類別：String
 * 題名：First Unique Character in a String
 * 連結：https://leetcode.com/explore/interview/card/top-interview-questions-easy/127/strings/881/
 */

function firstUniqChar(s) {
    let found = {};
    let res = Infinity;

    for (let i = 0; i < s.length; i++) {
        const char = s[i];
        if(!found[char]) {
            found[char] = [i];
            // res = Math.min(i, res);
        } else {
            found[char].push(i);
            // res = -1;
        }
    }
    
    let uniqueCharAmount = 0
    for (const char of Object.keys(found)) {
        const idxList = found[char];
        if(idxList.length === 1) {
            res = Math.min(res, idxList[0]);
            uniqueCharAmount++;
        }
    }
    if(uniqueCharAmount === 0) return -1;
    return res
};

console.log(
    firstUniqChar('aabbb'),
    firstUniqChar('loveleetcode'),
)