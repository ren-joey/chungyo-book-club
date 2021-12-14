/**
 * ===== 技術集會 WEEK2 =====
 * 本周題目
 * 主題：Top-Interview-questions-easy
 * 類別：String
 * 題名：First Unique Character in a String
 * 連結：https://leetcode.com/explore/interview/card/top-interview-questions-easy/127/strings/881/
 */

import (
	"strings"
)

func firstUniqChar(s string) int {
	var result int = -1
	for index, char := range s {
		charCount := strings.Count(s, string(char))
		if charCount == 1 {
			result = index
			break
		}
	}

	return result
}