/**
 * ===== 技術集會 WEEK6 =====
 * 本周題目 [MEDIUM]
 * 連結：https://leetcode.com/problems/find-the-winner-of-the-circular-game/
 */

 var findTheWinner = function(n, k) {
    let currentPos = 0;
    let seats = [];

    for (let i = 0; i < n; i++) {
        seats.push(i + 1);
    }

    while(seats.length > 1) {
        currentPos = (currentPos + k - 1) % seats.length;
        seats.splice(currentPos, 1);
        currentPos = currentPos % seats.length;
    }

    return seats[0];
};

// findTheWinner(6, 5);