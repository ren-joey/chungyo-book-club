/**
 * ===== 技術集會 WEEK2 =====
 * 本周題目
 * 主題：Top-Interview-questions-easy
 * 類別：String
 * 題名：First Unique Character in a String
 * 連結：https://leetcode.com/explore/interview/card/top-interview-questions-easy/127/strings/881/
 */

const s = "ltoccde";
const obj = [];
const test = s.split("");

function output() {
  for (let i = 0; i < test.length; i += 1) {
    if (test.indexOf(test[i]) === test.lastIndexOf(test[i])) {
      return i;
    }
  }
  return -1;
}

output();
