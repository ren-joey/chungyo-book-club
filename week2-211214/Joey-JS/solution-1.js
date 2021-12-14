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
    const arr = s.split('');
    let front = 0;

    while(front < arr.length) {
        const target = arr[front];
        if (target === undefined) {
            front += 1;
            continue;
        }

        let duplicated = false;
        for (let i = front + 1; i < arr.length; i += 1) {
            const element = arr[i];
            if (target === element) {
                duplicated = true;
                arr[i] = undefined;
            }
        }
        if (duplicated === false) return front;
        front += 1
    }

    return -1;
};


console.log(firstUniqChar('aabb')); // [DEV]