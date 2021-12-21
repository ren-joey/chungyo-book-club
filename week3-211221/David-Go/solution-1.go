/**
 * ===== 技術集會 WEEK3 =====
 * 本周題目 [EASY]
 * 連結：https://leetcode.com/explore/interview/card/top-interview-questions-easy/96/sorting-and-searching/587/
 *
 * 本周題目 [MEDIUM]
 * 連結：https://leetcode.com/problems/minimum-number-of-operations-to-move-all-balls-to-each-box/
 */

func merge(nums1 []int, m int, nums2 []int, n int) []int {

	// 先將　nums1 由小到大排序
	// result := []int{}

	// 合併數組 並由小到大 排序 且 必須大於 0
	for i := 0; i < (m + n - 1); i++ {
		for j := 0; j < len(nums2); j++ {
			// n1 > n2 位置互換
			if nums1[i] > nums2[j] {
				b := nums2[j]
				nums2[j] = nums1[i]
				nums1[i] = b
			}

			if nums1[i] > nums2[j] {
				b := nums2[j]
				nums2[j] = nums1[i]
				nums1[i] = b
			}
		}
	}

	fmt.Println(nums2)

	return nums1
}

/**
* 有包含球的盒子
*
 */
func minOperations(boxes string) []int {

	return []
}