/**
 * ===== 技術集會 WEEK5 =====
 * 本周題目 [MEDIUM]
 * 連結：https://leetcode.com/problems/partition-labels/
 */

/**
 * @param {string} s
 * @return {number[]}
 */
 var partitionLabels = function (s) {
    const map = {};
    for (let i = 0; i < s.length; i += 1) {
        const char = s[i];
        if(!map[char]) map[char] = [i, i];
        else map[char][1] = i;
    }

    let ranges = Object.values(map);

    for (let i = 1; i < ranges.length; i += 1) {
        let range = ranges[i];
        for (let j = i - 1; j >= 0; j -= 1) {
            if (range[0] < ranges[j][1]) {
                if (range[1] < ranges[j][1]) {
                    ranges.splice(i, 1);
                } else {
                    if (range[0] > ranges[j][0]) {
                        range[0] = ranges[j][0]
                    }
                    ranges.splice(j, 1);
                }

                i -= 1;
                range = ranges[i];
            }
        }
    }

    ranges = ranges.map(range => range[1] - range[0] + 1);
    return ranges;
};
