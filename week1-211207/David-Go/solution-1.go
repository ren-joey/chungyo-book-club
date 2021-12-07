/**
 * ===== 技術集會 WEEK1 =====
 * 本周題目
 * 主題：Top-Interview-questions-easy
 * 類別：Array
 * 題名：Remove Duplicates from Sorted Array
 * 連結：https://leetcode.com/explore/interview/card/top-interview-questions-easy/92/array/727/
 */

 collect := []int{} 
 for _ , v:= range nums{
 
	inCollect := false
	for i := 0 ; i < len(collect) ;i++{
	  inCollect = collect[i] == v 
	}
	
	if !inCollect {
		collect = append(collect,v)
	}

}	
 
return len(collect)
 
