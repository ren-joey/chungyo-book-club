/**
 * ===== 技術集會 WEEK4 =====
 * 本周題目 [MEDIUM]
 * 連結：https://leetcode.com/problems/partition-labels/
 */

/**
 * @param {string} s
 * @return {number[]}
 */
 var partitionLabels = function(s) {
    let lastAppear = {};
    for (let i = 0; i < s.length; i++) {
        lastAppear[s[i]] = i;
    }

    const patterns = [];
    let max = 0;
    let anchor = 0;

    for (let i = 0; i < s.length; i++) {
        max = Math.max(lastAppear[s[i]], max);
        if (i === max) {
            patterns.push(i - anchor + 1);
            anchor = i + 1;
        }
    }

    return patterns;
};

partitionLabels('ababcbacadefegdehijhklij')