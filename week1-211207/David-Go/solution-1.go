/**
 * ===== 技術集會 WEEK1 =====
 * 本周題目
 * 主題：Top-Interview-questions-easy
 * 類別：Array
 * 題名：Remove Duplicates from Sorted Array
 * 連結：https://leetcode.com/explore/interview/card/top-interview-questions-easy/92/array/727/
 */

arr := []int{}
for _, v := range nums {

	valExists := false

	for _, aVal := range arr {
		if aVal == v {
			valExists = true
			break
		}
	}

	if valExists == false {
		arr = append(arr, v)
		nums[len(arr)-1] = v
	}

}

return len(arr)
 
